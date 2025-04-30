# VoiceForGood – AI-Powered Testimonial Clipper for Nonprofits & Social Impact Teams .:*☆

Hello friend! (＾▽＾)

**VoiceForGood** is a storytelling tool built to serve nonprofits, educators, activists, and community-led projects. It transforms long-form interviews and real stories into impactful, ready-to-share video clips (TikToks, Youtube Shorts, or Reels) — **without the cost or complexity of traditional editing tools**. I understand that nonprofits and grassroots organizations often don't have time, budgets, or staff to produce polished content, but their voices deserve to be heard. Hence, VoiceForGood exists to amplify real stories from the field, classrooms, community centers, and campaign trails — using powerful AI tools that are fast, affordable, and accessible, making it easy to build a strong social presence, grow awareness, and drive meaningful impact.

---

## Features (*≧ω≦)

VoiceForGood automatically:

- Finds emotional, mission-relevant moments in raw footage
- Transcribes speech with high accuracy
- Detects and frames active speakers
- Adds subtitles for accessibility
- Exports mobile-ready vertical clips for social platforms

All within a simple, credit-based dashboard built for small teams and limited budgets.

---

## AI Models at Work (ノ^o^)ノ

- **`m-bain/whisperX`** — accurate transcription with timestamps  
- **`Junhua-Liao/LR-ASD`** — detects and focuses on active speakers  
- **Gemini 2.5 Pro (via API)** — identifies compelling and emotional story moments  
- **FFMPEGCV** — GPU-accelerated rendering for fast video exports  

---

## Tech Stack (๑˃ᴗ˂)ﻭ

### Frontend:  
Next.js, React, TypeScript, Tailwind CSS, ShadCN UI, Auth.js

### Backend:  
Python, FastAPI, Modal (GPU serverless compute), Inngest

### Infrastructure:  
AWS S3, Stripe, Git 

---

## Setup

Follow these steps to install and set up the project.

### Clone the Repository

```bash
git clone --recurse-submodules https://github.com/nhipixel/voiceforgood-ai-testimonial-highlighter.git
```

### Install Python

Download and install Python if not already installed. Use the link below for guidance on installation:
[Python Download](https://www.python.org/downloads/)

Create a virtual environment with **Python 3.12**.

### Backend

Navigate to backend folder:

```bash
cd voiceforgood-backend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Clone the [LR-ASD](https://github.com/Junhua-Liao/LR-ASD) repo into the backend folder, and rename the folder asd:

```bash
git clone https://github.com/Junhua-Liao/LR-ASD.git
```

Modal setup:

```bash
modal setup
```

Run on Modal:

```bash
modal run main.py
```

Deploy backend:

```bash
modal deploy main.py
```

### Frontend

Install dependencies:

```bash
cd voiceforgood-frontend
npm i
```

Run:

```bash
npm run dev
```

### Queue

Run the local queue development server with Inngest:

```bash
cd voiceforgood-frontend
npm run inngest-dev
```

## AWS Setup

CORS policy for S3 bucket:

```bash
[
    {
        "AllowedHeaders": [
            "Content-Type",
            "Content-Length",
            "Authorization"
        ],
        "AllowedMethods": [
            "PUT"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [
            "ETag"
        ],
        "MaxAgeSeconds": 3600
    }
]
```

IAM user policy to upload, download and list bucket items:

```bash
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": "[S3 ARN here]"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "[S3 ARN here]/*"
        }
    ]
}
```

## LLM for viral moment identification

[Create an API key for Gemini](https://ai.google.dev/gemini-api/docs/quickstart?lang=python)

# Videos used for testing / thumbnail

[MI6 Secret Agent Talks About the World's Darkest Secrets](https://www.youtube.com/watch?v=-vMgbJ6WqN4)

[Janney Sanchez | Therapy saved my life, From Rivera to Sanchez , Living in my Moms Shadow | Ep.198](https://www.youtube.com/watch?v=SOG0GmKts_I)
