import express, { Request, Response } from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { parseMessage } from "./sentenceAnalyser";

const app = express();

const port = process.env.PORT || 1337;

const telegramApiKey =
  process.env.TELEGRAM_API_KEY || "123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const apiUrl = "https://api.telegram.org/bot" + telegramApiKey;

app.use(helmet());
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 100,
  }),
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.post("/" + telegramApiKey, (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message || !message.text) {
    console.log("Empty msg!");
    return res.end();
  }

  const chatId = message?.chat?.id;
  if (typeof chatId !== "number" || !Number.isFinite(chatId)) {
    console.log("Invalid chat id");
    return res.end();
  }

  const reply = parseMessage(message);
  if (!reply) {
    return res.end();
  }

  postString(reply, message, res);
});

async function postString(
  reply: string,
  message: { chat: { id: number } },
  res: Response,
): Promise<void> {
  try {
    await fetch(`${apiUrl}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: message.chat.id,
        text: reply,
      }),
    });
    res.end("ok");
  } catch (err) {
    console.log("Error: " + err);
    res.status(500).end("Internal server error");
  }
}

app.listen(port, () => {
  console.log("InterjectionBot listening on port " + port);
});
