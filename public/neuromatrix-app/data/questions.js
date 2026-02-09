// Complete Assessment Questions Database
const assessmentQuestions = {
    'big-five': [
        {
            question: "I see myself as someone who is reserved and quiet",
            dimension: "extraversion",
            reversed: true,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I am someone who tends to find fault with others",
            dimension: "agreeableness",
            reversed: true,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I do a thorough job in everything I undertake",
            dimension: "conscientiousness",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I get nervous easily",
            dimension: "neuroticism",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I have an active imagination",
            dimension: "openness",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I am generally trusting of others",
            dimension: "agreeableness",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I tend to be lazy",
            dimension: "conscientiousness",
            reversed: true,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I am relaxed most of the time",
            dimension: "neuroticism",
            reversed: true,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I am curious about many different things",
            dimension: "openness",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I am full of energy",
            dimension: "extraversion",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I start arguments with others",
            dimension: "agreeableness",
            reversed: true,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I am always prepared",
            dimension: "conscientiousness",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I feel easily threatened",
            dimension: "neuroticism",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I enjoy artistic and aesthetic experiences",
            dimension: "openness",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I am the life of the party",
            dimension: "extraversion",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I am considerate and kind to almost everyone",
            dimension: "agreeableness",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I pay attention to details",
            dimension: "conscientiousness",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I worry about things",
            dimension: "neuroticism",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I have a vivid imagination",
            dimension: "openness",
            reversed: false,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I don't talk much",
            dimension: "extraversion",
            reversed: true,
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        }
    ],

    'multiple-intelligences': [
        {
            question: "I enjoy reading books and writing stories",
            dimension: "linguistic",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I'm good at solving math problems and logical puzzles",
            dimension: "logical_mathematical",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I can visualize objects in my mind easily",
            dimension: "spatial",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I have a good sense of rhythm and enjoy music",
            dimension: "musical",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I'm good at sports and physical activities",
            dimension: "bodily_kinesthetic",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I understand people's feelings and motivations well",
            dimension: "interpersonal",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I have a good understanding of myself and my emotions",
            dimension: "intrapersonal",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I enjoy spending time in nature and observing plants and animals",
            dimension: "naturalistic",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I'm good at explaining complex ideas to others",
            dimension: "linguistic",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I enjoy analyzing patterns and relationships between things",
            dimension: "logical_mathematical",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I can easily read maps and navigate unfamiliar places",
            dimension: "spatial",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I can play a musical instrument or sing well",
            dimension: "musical",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I learn best by doing things hands-on",
            dimension: "bodily_kinesthetic",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I work well in groups and can mediate conflicts",
            dimension: "interpersonal",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I have strong personal values and beliefs",
            dimension: "intrapersonal",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I enjoy learning about different species and ecosystems",
            dimension: "naturalistic",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I enjoy word games and puzzles like crosswords",
            dimension: "linguistic",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I enjoy strategy games and logical challenges",
            dimension: "logical_mathematical",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I can picture scenes clearly in my mind",
            dimension: "spatial",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        },
        {
            question: "I can remember melodies and tunes easily",
            dimension: "musical",
            options: [
                { text: "Not at all like me", value: 1 },
                { text: "Slightly like me", value: 2 },
                { text: "Somewhat like me", value: 3 },
                { text: "Mostly like me", value: 4 },
                { text: "Very much like me", value: 5 }
            ]
        }
    ],

    'cognitive-style': [
        {
            question: "When solving problems, I rely more on logic than intuition",
            dimension: "analytic_intuitive",
            options: [
                { text: "Strongly Prefer Logic", value: 1 },
                { text: "Prefer Logic", value: 2 },
                { text: "Balanced", value: 3 },
                { text: "Prefer Intuition", value: 4 },
                { text: "Strongly Prefer Intuition", value: 5 }
            ]
        },
        {
            question: "I prefer to look at the big picture rather than focus on details",
            dimension: "holistic_analytic",
            options: [
                { text: "Strongly Prefer Details", value: 1 },
                { text: "Prefer Details", value: 2 },
                { text: "Balanced", value: 3 },
                { text: "Prefer Big Picture", value: 4 },
                { text: "Strongly Prefer Big Picture", value: 5 }
            ]
        },
        {
            question: "I make decisions quickly based on gut feeling",
            dimension: "quick_deliberate",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I prefer structured, step-by-step approaches to tasks",
            dimension: "structured_flexible",
            options: [
                { text: "Strongly Prefer Structured", value: 1 },
                { text: "Prefer Structured", value: 2 },
                { text: "Balanced", value: 3 },
                { text: "Prefer Flexible", value: 4 },
                { text: "Strongly Prefer Flexible", value: 5 }
            ]
        },
        {
            question: "I enjoy working with abstract concepts and theories",
            dimension: "abstract_concrete",
            options: [
                { text: "Strongly Prefer Concrete", value: 1 },
                { text: "Prefer Concrete", value: 2 },
                { text: "Balanced", value: 3 },
                { text: "Prefer Abstract", value: 4 },
                { text: "Strongly Prefer Abstract", value: 5 }
            ]
        },
        {
            question: "I prefer learning through hands-on experience rather than reading about it",
            dimension: "experiential_theoretical",
            options: [
                { text: "Strongly Prefer Theoretical", value: 1 },
                { text: "Prefer Theoretical", value: 2 },
                { text: "Balanced", value: 3 },
                { text: "Prefer Experiential", value: 4 },
                { text: "Strongly Prefer Experiential", value: 5 }
            ]
        },
        {
            question: "I work best in a quiet, organized environment",
            dimension: "focused_diffuse",
            options: [
                { text: "Strongly Agree", value: 5 },
                { text: "Agree", value: 4 },
                { text: "Neutral", value: 3 },
                { text: "Disagree", value: 2 },
                { text: "Strongly Disagree", value: 1 }
            ]
        },
        {
            question: "I can easily switch between different tasks and projects",
            dimension: "multitasking_singletasking",
            options: [
                { text: "Strongly Agree", value: 5 },
                { text: "Agree", value: 4 },
                { text: "Neutral", value: 3 },
                { text: "Disagree", value: 2 },
                { text: "Strongly Disagree", value: 1 }
            ]
        },
        {
            question: "I prefer to follow established procedures rather than create new ones",
            dimension: "conventional_innovative",
            options: [
                { text: "Strongly Prefer Conventional", value: 1 },
                { text: "Prefer Conventional", value: 2 },
                { text: "Balanced", value: 3 },
                { text: "Prefer Innovative", value: 4 },
                { text: "Strongly Prefer Innovative", value: 5 }
            ]
        },
        {
            question: "I often think about multiple possible outcomes before making a decision",
            dimension: "systematic_intuitive",
            options: [
                { text: "Strongly Systematic", value: 1 },
                { text: "Mostly Systematic", value: 2 },
                { text: "Balanced", value: 3 },
                { text: "Mostly Intuitive", value: 4 },
                { text: "Strongly Intuitive", value: 5 }
            ]
        },
        {
            question: "I trust data and facts more than personal experience",
            dimension: "data_experience",
            options: [
                { text: "Strongly Prefer Data", value: 1 },
                { text: "Prefer Data", value: 2 },
                { text: "Balanced", value: 3 },
                { text: "Prefer Experience", value: 4 },
                { text: "Strongly Prefer Experience", value: 5 }
            ]
        },
        {
            question: "I prefer creative solutions over traditional ones",
            dimension: "creative_traditional",
            options: [
                { text: "Strongly Prefer Traditional", value: 1 },
                { text: "Prefer Traditional", value: 2 },
                { text: "Balanced", value: 3 },
                { text: "Prefer Creative", value: 4 },
                { text: "Strongly Prefer Creative", value: 5 }
            ]
        },
        {
            question: "I need time to reflect before reaching conclusions",
            dimension: "reflective_impulsive",
            options: [
                { text: "Always Impulsive", value: 1 },
                { text: "Usually Impulsive", value: 2 },
                { text: "Sometimes Reflective", value: 3 },
                { text: "Usually Reflective", value: 4 },
                { text: "Always Reflective", value: 5 }
            ]
        },
        {
            question: "I focus on accuracy rather than speed",
            dimension: "accuracy_speed",
            options: [
                { text: "Always Speed", value: 1 },
                { text: "Usually Speed", value: 2 },
                { text: "Balanced", value: 3 },
                { text: "Usually Accuracy", value: 4 },
                { text: "Always Accuracy", value: 5 }
            ]
        },
        {
            question: "I rely on my first impressions when meeting people",
            dimension: "impression_analysis",
            options: [
                { text: "Always Analysis", value: 1 },
                { text: "Usually Analysis", value: 2 },
                { text: "Balanced", value: 3 },
                { text: "Usually Impression", value: 4 },
                { text: "Always Impression", value: 5 }
            ]
        }
    ],

    'learning-style': [
        {
            question: "I prefer to learn by watching demonstrations or videos",
            dimension: "visual",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I remember information better when I hear it rather than read it",
            dimension: "auditory",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I prefer to learn by reading books or written materials",
            dimension: "reading_writing",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I learn best by doing things hands-on",
            dimension: "kinesthetic",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I use diagrams and charts to help me understand information",
            dimension: "visual",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I enjoy participating in group discussions and debates",
            dimension: "auditory",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I take detailed notes when learning something new",
            dimension: "reading_writing",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I prefer to learn through experiments and trial-and-error",
            dimension: "kinesthetic",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I use color-coding to organize my notes and materials",
            dimension: "visual",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I often read instructions out loud to myself",
            dimension: "auditory",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I rewrite important information to help me remember it",
            dimension: "reading_writing",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I need to physically try something to really understand it",
            dimension: "kinesthetic",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I create mind maps to visualize relationships between ideas",
            dimension: "visual",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I remember things better when they're set to music or rhythm",
            dimension: "auditory",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I make lists to organize my thoughts and tasks",
            dimension: "reading_writing",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        }
    ],

    'emotional-intelligence': [
        {
            question: "I am aware of my emotions as I experience them",
            dimension: "self_awareness",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I can control my temper when I'm upset",
            dimension: "self_regulation",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I am motivated by internal goals rather than external rewards",
            dimension: "motivation",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I can sense how others are feeling even when they don't say anything",
            dimension: "empathy",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I am good at managing relationships and building rapport",
            dimension: "social_skills",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I can bounce back quickly from disappointments",
            dimension: "resilience",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I can accurately identify the causes of my emotions",
            dimension: "self_awareness",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I think before I act when I'm emotional",
            dimension: "self_regulation",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I set challenging goals for myself",
            dimension: "motivation",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I can understand different perspectives even when I disagree",
            dimension: "empathy",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I resolve conflicts effectively",
            dimension: "social_skills",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I maintain a positive outlook during difficult times",
            dimension: "resilience",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I recognize how my emotions affect my decisions",
            dimension: "self_awareness",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I can delay gratification to achieve long-term goals",
            dimension: "self_regulation",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I stay committed to goals even when facing obstacles",
            dimension: "motivation",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        }
    ],

    'stress-resilience': [
        {
            question: "I remain calm under pressure",
            dimension: "stress_tolerance",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I bounce back quickly from difficult situations",
            dimension: "recovery_capacity",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I have effective ways to cope with stress",
            dimension: "coping_mechanisms",
            options: [
                { text: "Strongly Disagree", value: 1 },
                { text: "Disagree", value: 2 },
                { text: "Neutral", value: 3 },
                { text: "Agree", value: 4 },
                { text: "Strongly Agree", value: 5 }
            ]
        },
        {
            question: "I can adapt to unexpected changes",
            dimension: "adaptation",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I maintain a positive outlook during challenges",
            dimension: "optimism",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I can ask for help when I need it",
            dimension: "support_seeking",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I practice relaxation techniques regularly",
            dimension: "self_care",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I can see opportunities in difficult situations",
            dimension: "reframing",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I maintain healthy boundaries in relationships",
            dimension: "boundary_setting",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I learn from difficult experiences",
            dimension: "growth_mindset",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I can prioritize effectively during stressful times",
            dimension: "prioritization",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I maintain a sense of humor in challenging situations",
            dimension: "humor",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I take breaks when I need to recharge",
            dimension: "energy_management",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I focus on what I can control rather than what I can't",
            dimension: "control_focus",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        },
        {
            question: "I celebrate small victories along the way",
            dimension: "acknowledgment",
            options: [
                { text: "Never", value: 1 },
                { text: "Rarely", value: 2 },
                { text: "Sometimes", value: 3 },
                { text: "Often", value: 4 },
                { text: "Always", value: 5 }
            ]
        }
    ]
};

// Assessment Models Configuration
function getAssessmentModels() {
    return [
        {
            id: 'big-five',
            name: 'Big Five Personality',
            description: 'Measures Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism - the five fundamental dimensions of personality',
            icon: 'fas fa-star',
            color: '#667eea',
            duration: '10-15 minutes',
            questions: 20,
            dimensions: ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism']
        },
        {
            id: 'multiple-intelligences',
            name: 'Multiple Intelligences',
            description: "Assesses Gardner's 8 intelligences: linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, naturalistic",
            icon: 'fas fa-brain',
            color: '#a855f7',
            duration: '15-20 minutes',
            questions: 20,
            dimensions: ['linguistic', 'logical_mathematical', 'spatial', 'musical', 'bodily_kinesthetic', 'interpersonal', 'intrapersonal', 'naturalistic']
        },
        {
            id: 'cognitive-style',
            name: 'Cognitive Style',
            description: 'Identifies your thinking patterns: analytic vs. intuitive, systematic vs. holistic, and other cognitive preferences',
            icon: 'fas fa-cogs',
            color: '#f59e0b',
            duration: '12-18 minutes',
            questions: 15,
            dimensions: ['analytic_intuitive', 'holistic_analytic', 'quick_deliberate', 'structured_flexible', 'abstract_concrete', 'experiential_theoretical', 'focused_diffuse', 'multitasking_singletasking', 'conventional_innovative', 'systematic_intuitive', 'data_experience', 'creative_traditional', 'reflective_impulsive', 'accuracy_speed', 'impression_analysis']
        },
        {
            id: 'learning-style',
            name: 'Learning Style',
            description: 'Identifies your preferred learning methods using the VARK model: Visual, Auditory, Reading/Writing, Kinesthetic',
            icon: 'fas fa-graduation-cap',
            color: '#10b981',
            duration: '10-15 minutes',
            questions: 15,
            dimensions: ['visual', 'auditory', 'reading_writing', 'kinesthetic']
        },
        {
            id: 'emotional-intelligence',
            name: 'Emotional Intelligence',
            description: 'Measures self-awareness, self-regulation, motivation, empathy, social skills, and resilience',
            icon: 'fas fa-heart',
            color: '#ec4899',
            duration: '12-15 minutes',
            questions: 15,
            dimensions: ['self_awareness', 'self_regulation', 'motivation', 'empathy', 'social_skills', 'resilience']
        },
        {
            id: 'stress-resilience',
            name: 'Stress Resilience',
            description: 'Evaluates coping mechanisms, stress tolerance, recovery capacity, adaptation skills, and resilience factors',
            icon: 'fas fa-shield-alt',
            color: '#06b6d4',
            duration: '10-12 minutes',
            questions: 15,
            dimensions: ['stress_tolerance', 'recovery_capacity', 'coping_mechanisms', 'adaptation', 'optimism', 'support_seeking', 'self_care', 'reframing', 'boundary_setting', 'growth_mindset', 'prioritization', 'humor', 'energy_management', 'control_focus', 'acknowledgment']
        }
    ];
}

// Helper function to get question count by model
function getQuestionCount(modelId) {
    return assessmentQuestions[modelId] ? assessmentQuestions[modelId].length : 0;
}

// Helper function to get all dimensions for a model
function getModelDimensions(modelId) {
    const questions = assessmentQuestions[modelId];
    if (!questions) return [];
    
    const dimensions = new Set();
    questions.forEach(q => dimensions.add(q.dimension));
    return Array.from(dimensions);
}

// Helper function to get dimension description
function getDimensionDescription(dimension) {
    const descriptions = {
        // Big Five
        'openness': 'Openness to experience - Imagination, curiosity, creativity',
        'conscientiousness': 'Conscientiousness - Organization, responsibility, diligence',
        'extraversion': 'Extraversion - Sociability, assertiveness, enthusiasm',
        'agreeableness': 'Agreeableness - Compassion, cooperation, trust',
        'neuroticism': 'Neuroticism - Emotional stability, anxiety, moodiness',
        
        // Multiple Intelligences
        'linguistic': 'Linguistic Intelligence - Word smart, language abilities',
        'logical_mathematical': 'Logical-Mathematical Intelligence - Number/reasoning smart',
        'spatial': 'Spatial Intelligence - Picture smart, visual thinking',
        'musical': 'Musical Intelligence - Music smart, rhythm and tone',
        'bodily_kinesthetic': 'Bodily-Kinesthetic Intelligence - Body smart, physical coordination',
        'interpersonal': 'Interpersonal Intelligence - People smart, social understanding',
        'intrapersonal': 'Intrapersonal Intelligence - Self smart, self-awareness',
        'naturalistic': 'Naturalistic Intelligence - Nature smart, environmental awareness',
        
        // Cognitive Style
        'analytic_intuitive': 'Analytic vs Intuitive thinking',
        'holistic_analytic': 'Holistic vs Analytic perspective',
        'quick_deliberate': 'Quick vs Deliberate decision making',
        'structured_flexible': 'Structured vs Flexible approach',
        'abstract_concrete': 'Abstract vs Concrete thinking',
        'experiential_theoretical': 'Experiential vs Theoretical learning',
        'focused_diffuse': 'Focused vs Diffuse attention',
        'multitasking_singletasking': 'Multitasking vs Single-tasking',
        'conventional_innovative': 'Conventional vs Innovative approach',
        'systematic_intuitive': 'Systematic vs Intuitive approach',
        'data_experience': 'Data-driven vs Experience-based',
        'creative_traditional': 'Creative vs Traditional solutions',
        'reflective_impulsive': 'Reflective vs Impulsive thinking',
        'accuracy_speed': 'Accuracy vs Speed priority',
        'impression_analysis': 'Impression-based vs Analysis-based judgment',
        
        // Learning Style
        'visual': 'Visual learning - Learning through seeing',
        'auditory': 'Auditory learning - Learning through hearing',
        'reading_writing': 'Reading/Writing learning - Learning through text',
        'kinesthetic': 'Kinesthetic learning - Learning through doing',
        
        // Emotional Intelligence
        'self_awareness': 'Self-Awareness - Recognizing own emotions',
        'self_regulation': 'Self-Regulation - Managing emotions',
        'motivation': 'Motivation - Internal drive and persistence',
        'empathy': 'Empathy - Understanding others emotions',
        'social_skills': 'Social Skills - Relationship management',
        'resilience': 'Resilience - Bouncing back from adversity',
        
        // Stress Resilience
        'stress_tolerance': 'Stress Tolerance - Handling pressure',
        'recovery_capacity': 'Recovery Capacity - Bouncing back quickly',
        'coping_mechanisms': 'Coping Mechanisms - Effective stress management',
        'adaptation': 'Adaptation - Adjusting to change',
        'optimism': 'Optimism - Positive outlook',
        'support_seeking': 'Support Seeking - Asking for help',
        'self_care': 'Self-Care - Taking care of oneself',
        'reframing': 'Reframing - Seeing opportunities in challenges',
        'boundary_setting': 'Boundary Setting - Healthy limits',
        'growth_mindset': 'Growth Mindset - Learning from difficulties',
        'prioritization': 'Prioritization - Effective focus under stress',
        'humor': 'Humor - Maintaining perspective',
        'energy_management': 'Energy Management - Balanced expenditure',
        'control_focus': 'Control Focus - Focusing on what you can control',
        'acknowledgment': 'Acknowledgement - Celebrating progress'
    };
    
    return descriptions[dimension] || 'No description available';
}