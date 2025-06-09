// const messages = [
//   {
//     role: "system",
//     content: `
// You are StudySphere AI, the official assistant for the StudySphere platform.

// About StudySphere:
// - Founded by Bereket Eshete and Eliyas Yenedlem in 2023
// - Mission: To revolutionize collaborative learning through technology
// - Key Features:
//   * StudyPods: Virtual study groups (3-5 students) with shared whiteboards and resources
//   * AI Tutor: Instant help with academic questions
//   * Reward Hub: Earn points and badges for study achievements
//   * Progress Tracking: Visual dashboards for learning goals

// Tone Guidelines:
// - Friendly but professional
// - Encouraging and motivational
// - Concise responses (1-2 paragraphs max)
// - Use simple, clear language

// Answering Guidelines:
// 1. For founder questions: Mention both founders and their vision
// 2. For feature questions: Highlight benefits and how to access
// 3. For technical issues: Direct to support@studysphere.com
// 4. For suggestions: Thank them and note it will be shared with the team

// Current Promotions:
// - New users get 500 bonus points
// - Referral program: 200 points per friend who joins

// Always end with a relevant follow-up question to continue the conversation.

// `,
//   },
// ];

// // function to add message
// function addMessage(msg, isUser) {
//   const messagesDiv = document.getElementById("messages");
//   const messageDiv = document.createElement("div");
//   messageDiv.classList.add("message");
//   if (isUser) {
//     messageDiv.classList.add("user-message");
//   }
//   messageDiv.textContent = msg;
//   messagesDiv.appendChild(messageDiv);
//   messagesDiv.scrollTop = messagesDiv.scrollHeight;
// }

// // function to send message
// function sendMessage() {
//   const input = document.getElementById("input-message");
//   const message = input.value.trim();
//   if (message) {
//     addMessage(message, true);
//     input.value = "";
//     messages.push({ content: message, role: "user" });

//     if (typeof puter !== "undefined") {
//       puter.ai
//         .chat(messages)
//         .then((response) => {
//           const reply = response.message?.content || "⚠️ No response from AI.";
//           addMessage(reply, false);
//           messages.push({ content: reply, role: "assistant" });
//         })
//         .catch((error) => {
//           console.error("AI response error:", error);
//           addMessage("⚠️ Error talking to AI.", false);
//         });
//     } else {
//       addMessage("⚠️ Puter SDK not loaded.", false);
//     }
//   }
// }

// Initial system message
const messages = [
  {
    role: "system",
    content: `You are StudySphere AI, the official assistant for the StudySphere platform.

About StudySphere:
- Founded by Bereket Eshete and Eliyas Yenedlem in 2023
- Mission: To revolutionize collaborative learning through technology
- Key Features:
  * StudyPods: Virtual study groups (3-5 students) with shared whiteboards and resources
  * AI Tutor: Instant help with academic questions
  * Reward Hub: Earn points and badges for study achievements
  * Progress Tracking: Visual dashboards for learning goals

Tone Guidelines:
- Friendly but professional
- Encouraging and motivational
- Concise responses (1-2 paragraphs max)
- Use simple, clear language

Answering Guidelines:
1. For founder questions: Mention both founders and their vision
2. For feature questions: Highlight benefits and how to access
3. For technical issues: Direct to support@studysphere.com
4. For suggestions: Thank them and note it will be shared with the team

Current Promotions:
- New users get 500 bonus points
- Referral program: 200 points per friend who joins

Always end with a relevant follow-up question to continue the conversation.
`, // same content as before
  },
];

// Add a message to chat
function addMessage(content, type = "user") {
  const messagesDiv = document.getElementById("messages");
  const bubble = document.createElement("div");
  bubble.classList.add("chat-bubble", type);
  bubble.textContent = content;
  messagesDiv.appendChild(bubble);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
  return bubble;
}

// Show "Typing..." then replace it
function showTyping() {
  return addMessage("Typing...", "bot");
}

// Handle sending message
function sendMessage() {
  const input = document.getElementById("input-message");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";
  messages.push({ role: "user", content: text });

  const typingBubble = showTyping();

  if (typeof puter !== "undefined") {
    puter.ai
      .chat(messages)
      .then((res) => {
        const reply = res.message?.content || "⚠️ No response from AI.";
        typingBubble.textContent = reply;
        messages.push({ role: "assistant", content: reply });
      })
      .catch((err) => {
        console.error("AI response error:", err);
        typingBubble.textContent = "⚠️ Error talking to AI.";
      });
  } else {
    typingBubble.textContent = "⚠️ Puter SDK not loaded.";
  }
}

// Auto-fill and send a sample question
function setSampleQuestion(text) {
  const input = document.getElementById("input-message");
  input.value = text;
  sendMessage();
}
