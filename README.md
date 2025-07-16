# 🖼️ Imagify - Text to image generator


A full‑stack SaaS application that lets users generate images from text prompts using AI like OpenAI’s DALL·E or Stable Diffusion. Built with React.js frontend and Express/MongoDB backend.

---

## 🚀 Features 

- User registration/login with JWT authentication
 
- Input prompts to generate images via AI API
  
- Credit-based generation system (integrated with Stripe or manual credits)
  
- User gallery: save, view, download, and delete generated images
  
- Global feed or community sharing (optional)
  
- Admin dashboard to manage users and monitor usage
  
- Responsive UI built with Tailwind CSS or Material UI

---

## 🛠️ Tech Stack

| Layer         | Technology                                 |
|---------------|--------------------------------------------|
| Frontend      | React.js, Tailwind CSS / MUI               |
| Backend       | Node.js, Express.js                        |
| Database      | MongoDB (Mongoose)                         |
| AI Model      | OpenAI DALL·E / StabilityAI / ClipDrop API |
| Image Storage | Cloudinary or AWS S3                       |
| Auth          | JWT (or OAuth via Google/GitHub)           |
| Billing       | Stripe (or manual credit handling)         |

---

## 🔁 Workflow & Usage

- Visit http://localhost:4000

- Register and login

- Enter a prompt and hit Generate

- Backend processes prompt via AI API and returns image

- Store image record in MongoDB and optionally Cloudinary

- Deduct credit from user account (Stripe usage or manual for testing)

- Display generated image in user gallery

- Users can search, download, or delete their images
