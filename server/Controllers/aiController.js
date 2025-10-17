import ai from "../Configs/Ai.js";
import Resume from "../Models/Resume.js";


// ✅ Enhance Professional Summary
export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;
    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are an expert in resume writing. Enhance the professional summary in 1–2 sentences, highlighting key skills, experience, and career objectives. Make it compelling and ATS-friendly. Only return text, no options or formatting.",
        },
        {
          role: "user",
          content: userContent,
        },
      ],
    });

    const enhancedContent = response.choices[0].message.content;
    return res.status(200).json({ enhancedContent });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


// ✅ Enhance Job Description
export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are an expert in resume writing. Enhance the job description in 1–2 sentences, highlighting key responsibilities and achievements using action verbs. Only return plain text.",
        },
        {
          role: "user",
          content: userContent,
        },
      ],
    });

    const enhancedContent = response.choices[0].message.content;
    return res.status(200).json({ enhancedContent });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


// ✅ Upload Resume (fixed)
export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!resumeText) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const systemPrompt = "You are an expert AI agent to extract data from resume";

    const userPrompt = `extract data from this resume:${resumeText} Provide data in the following JSON format with no additional text before or after:
    {
      professional_summary: "",
      skills: [],
      personal_info: {
        image: "",
        full_name: "",
        profession: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        website: ""
      },
      experience: [
        {
          company: "",
          position: "",
          start_date: "",
          end_date: "",
          description: "",
          is_current: false
        }
      ],
      project: [
        {
          name: "",
          type: "",
          description: ""
        }
      ],
      education: [
        {
          institution: "",
          degree: "",
          field: "",
          graduation_date: "",
          gpa: ""
        }
      ]
    }`;

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
    });

    const extractedData = response.choices[0].message.content;
    const parsedData = JSON.parse(extractedData);

    const newResume = await Resume.create({ userId, title, ...parsedData });

    // ✅ Corrected this line:
    return res.status(200).json({ resumeId: newResume._id });
  } catch (error) {
    console.error("Upload Resume Error:", error);
    return res.status(400).json({ message: error.message });
  }
};
