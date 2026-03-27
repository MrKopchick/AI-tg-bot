const BotEvent = {
    TEXT: "message:text",
    PHOTO: "message:photo",
    DOCUMENT: "message:document",
    CALLBACK: "callback_query:data",
} as const;

export { BotEvent };
