// Complete Training Modules Database

const trainingModules = {
    'child': [
        {
            id: 'creative-exploration',
            title: 'Creative Exploration Lab',
            icon: 'fas fa-palette',
            category: 'Creativity Development',
            description: 'Interactive games and activities to develop imagination, artistic expression, and innovative thinking. Includes drawing exercises, story creation, and problem-solving challenges.',
            duration: '15-20 mins',
            difficulty: 'Beginner',
            tags: ['Creativity', 'Play-based', 'Visual Thinking', 'Imagination'],
            ageSpecific: 'Ages 5-12',
            objectives: [
                'Enhance divergent thinking',
                'Develop artistic expression',
                'Improve problem-solving flexibility',
                'Build confidence in creative expression'
            ],
            exercises: 8,
            progressTracking: true
        },
        {
            id: 'memory-adventure',
            title: 'Memory Adventure Quest',
            icon: 'fas fa-brain',
            category: 'Memory Training',
            description: 'Story-based memory games and exercises that improve recall, concentration, and working memory. Uses mnemonic techniques and visual associations.',
            duration: '10-15 mins',
            difficulty: 'Beginner',
            tags: ['Memory', 'Focus', 'Storytelling', 'Attention'],
            ageSpecific: 'Ages 5-12',
            objectives: [
                'Improve short-term memory',
                'Enhance concentration',
                'Develop mnemonic strategies',
                'Increase attention span'
            ],
            exercises: 6,
            progressTracking: true
        },
        {
            id: 'emotional-discovery',
            title: 'Emotional Discovery Journey',
            icon: 'fas fa-heart',
            category: 'Emotional Intelligence',
            description: 'Learn to identify, express, and manage emotions through interactive scenarios, stories, and reflection exercises.',
            duration: '15 mins',
            difficulty: 'Beginner',
            tags: ['Emotions', 'Social Skills', 'Self-awareness', 'Empathy'],
            ageSpecific: 'Ages 5-12',
            objectives: [
                'Identify basic emotions',
                'Express feelings appropriately',
                'Develop empathy skills',
                'Learn simple coping strategies'
            ],
            exercises: 7,
            progressTracking: true
        },
        {
            id: 'focus-finder',
            title: 'Focus Finder Challenge',
            icon: 'fas fa-bullseye',
            category: 'Attention Training',
            description: 'Games and exercises designed to improve focus, reduce distractions, and enhance sustained attention.',
            duration: '12-18 mins',
            difficulty: 'Beginner',
            tags: ['Focus', 'Attention', 'Concentration', 'Mindfulness'],
            ageSpecific: 'Ages 5-12',
            objectives: [
                'Improve selective attention',
                'Enhance task persistence',
                'Reduce distractibility',
                'Develop mindfulness basics'
            ],
            exercises: 8,
            progressTracking: true
        },
        {
            id: 'problem-puzzle',
            title: 'Problem Puzzle Playground',
            icon: 'fas fa-puzzle-piece',
            category: 'Problem Solving',
            description: 'Age-appropriate puzzles and challenges that develop logical thinking, pattern recognition, and solution-finding skills.',
            duration: '10-15 mins',
            difficulty: 'Beginner',
            tags: ['Logic', 'Puzzles', 'Problem-solving', 'Patterns'],
            ageSpecific: 'Ages 5-12',
            objectives: [
                'Develop logical reasoning',
                'Enhance pattern recognition',
                'Improve solution flexibility',
                'Build confidence in problem-solving'
            ],
            exercises: 9,
            progressTracking: true
        }
    ],
    'teen': [
        {
            id: 'academic-mastery',
            title: 'Academic Mastery System',
            icon: 'fas fa-graduation-cap',
            category: 'Learning Optimization',
            description: 'Advanced study techniques, memory systems, and time management strategies specifically designed for academic success.',
            duration: '20-25 mins',
            difficulty: 'Intermediate',
            tags: ['Study Skills', 'Memory', 'Focus', 'Organization', 'Time Management'],
            ageSpecific: 'Ages 13-19',
            objectives: [
                'Master effective study techniques',
                'Improve information retention',
                'Enhance exam preparation',
                'Develop time management skills'
            ],
            exercises: 10,
            progressTracking: true
        },
        {
            id: 'social-intelligence',
            title: 'Social Intelligence Lab',
            icon: 'fas fa-users',
            category: 'Social Skills',
            description: 'Interactive scenarios and role-playing exercises to develop empathy, communication skills, social awareness, and relationship building.',
            duration: '15-20 mins',
            difficulty: 'Intermediate',
            tags: ['Social Skills', 'Communication', 'Empathy', 'Relationships', 'Assertiveness'],
            ageSpecific: 'Ages 13-19',
            objectives: [
                'Enhance communication effectiveness',
                'Develop emotional intelligence',
                'Improve conflict resolution',
                'Build healthy relationships'
            ],
            exercises: 9,
            progressTracking: true
        },
        {
            id: 'future-planning',
            title: 'Future Planning Workshop',
            icon: 'fas fa-chart-line',
            category: 'Career Development',
            description: 'Comprehensive self-discovery exercises, career exploration, and goal-setting strategies to identify strengths and potential career paths.',
            duration: '25-30 mins',
            difficulty: 'Intermediate',
            tags: ['Career', 'Planning', 'Self-discovery', 'Goals', 'Skills Assessment'],
            ageSpecific: 'Ages 13-19',
            objectives: [
                'Identify personal strengths',
                'Explore career interests',
                'Develop goal-setting skills',
                'Create academic/career plans'
            ],
            exercises: 8,
            progressTracking: true
        },
        {
            id: 'stress-shield',
            title: 'Stress Shield Program',
            icon: 'fas fa-shield-virus',
            category: 'Stress Management',
            description: 'Evidence-based techniques for managing academic pressure, social stress, and personal challenges during teenage years.',
            duration: '18-22 mins',
            difficulty: 'Intermediate',
            tags: ['Stress Management', 'Resilience', 'Mindfulness', 'Self-care', 'Coping'],
            ageSpecific: 'Ages 13-19',
            objectives: [
                'Develop stress management skills',
                'Learn healthy coping mechanisms',
                'Improve emotional regulation',
                'Build resilience and adaptability'
            ],
            exercises: 7,
            progressTracking: true
        },
        {
            id: 'digital-wellness',
            title: 'Digital Wellness Hub',
            icon: 'fas fa-laptop-code',
            category: 'Technology Balance',
            description: 'Strategies for healthy technology use, digital citizenship, and balancing screen time with offline activities.',
            duration: '20-25 mins',
            difficulty: 'Intermediate',
            tags: ['Digital Wellness', 'Technology', 'Balance', 'Focus', 'Online Safety'],
            ageSpecific: 'Ages 13-19',
            objectives: [
                'Develop healthy tech habits',
                'Improve digital literacy',
                'Enhance online safety awareness',
                'Balance digital/offline life'
            ],
            exercises: 8,
            progressTracking: true
        }
    ],
    'young-adult': [
        {
            id: 'career-acceleration',
            title: 'Career Acceleration Program',
            icon: 'fas fa-briefcase',
            category: 'Professional Development',
            description: 'Comprehensive skills development for workplace success, leadership, career advancement, and professional networking.',
            duration: '25-30 mins',
            difficulty: 'Advanced',
            tags: ['Career', 'Leadership', 'Skills', 'Networking', 'Professional Growth'],
            ageSpecific: 'Ages 20-35',
            objectives: [
                'Develop leadership competencies',
                'Enhance professional communication',
                'Improve career planning',
                'Build effective networking skills'
            ],
            exercises: 12,
            progressTracking: true
        },
        {
            id: 'emotional-mastery',
            title: 'Emotional Mastery System',
            icon: 'fas fa-brain',
            category: 'Emotional Intelligence',
            description: 'Advanced emotional regulation techniques, stress management, resilience building, and interpersonal effectiveness.',
            duration: '20-25 mins',
            difficulty: 'Advanced',
            tags: ['Emotions', 'Stress', 'Resilience', 'Self-regulation', 'Mindfulness'],
            ageSpecific: 'Ages 20-35',
            objectives: [
                'Master emotional regulation',
                'Develop advanced stress management',
                'Enhance relationship intelligence',
                'Build psychological resilience'
            ],
            exercises: 10,
            progressTracking: true
        },
        {
            id: 'financial-intelligence',
            title: 'Financial Intelligence Lab',
            icon: 'fas fa-chart-pie',
            category: 'Financial Skills',
            description: 'Practical money management, investment basics, financial planning, and wealth-building strategies for young adults.',
            duration: '30 mins',
            difficulty: 'Advanced',
            tags: ['Finance', 'Planning', 'Investing', 'Budgeting', 'Wealth Building'],
            ageSpecific: 'Ages 20-35',
            objectives: [
                'Develop financial literacy',
                'Learn investment fundamentals',
                'Create effective budgets',
                'Plan for financial independence'
            ],
            exercises: 9,
            progressTracking: true
        },
        {
            id: 'relationship-dynamics',
            title: 'Relationship Dynamics Workshop',
            icon: 'fas fa-handshake',
            category: 'Interpersonal Skills',
            description: 'Advanced communication, conflict resolution, and relationship-building skills for personal and professional contexts.',
            duration: '22-28 mins',
            difficulty: 'Advanced',
            tags: ['Relationships', 'Communication', 'Conflict Resolution', 'Empathy', 'Boundaries'],
            ageSpecific: 'Ages 20-35',
            objectives: [
                'Enhance relationship communication',
                'Develop conflict resolution skills',
                'Improve boundary setting',
                'Build lasting relationships'
            ],
            exercises: 8,
            progressTracking: true
        },
        {
            id: 'peak-performance',
            title: 'Peak Performance System',
            icon: 'fas fa-chart-line',
            category: 'Personal Excellence',
            description: 'Strategies for optimizing productivity, goal achievement, time management, and personal effectiveness.',
            duration: '25-30 mins',
            difficulty: 'Advanced',
            tags: ['Productivity', 'Goals', 'Time Management', 'Performance', 'Optimization'],
            ageSpecific: 'Ages 20-35',
            objectives: [
                'Maximize personal productivity',
                'Develop effective goal systems',
                'Optimize time management',
                'Achieve consistent high performance'
            ],
            exercises: 11,
            progressTracking: true
        }
    ],
    'adult': [
        {
            id: 'leadership-excellence',
            title: 'Leadership Excellence Program',
            icon: 'fas fa-crown',
            category: 'Leadership Development',
            description: 'Advanced leadership skills, strategic thinking, team management, organizational development, and influence strategies.',
            duration: '30-35 mins',
            difficulty: 'Expert',
            tags: ['Leadership', 'Management', 'Strategy', 'Team Building', 'Influence'],
            ageSpecific: 'Ages 36-59',
            objectives: [
                'Develop advanced leadership skills',
                'Enhance strategic thinking',
                'Improve team management',
                'Master organizational influence'
            ],
            exercises: 14,
            progressTracking: true
        },
        {
            id: 'wisdom-integration',
            title: 'Wisdom Integration Workshop',
            icon: 'fas fa-lightbulb',
            category: 'Personal Growth',
            description: 'Techniques for integrating life experience into practical wisdom, improved decision-making, and mentoring skills.',
            duration: '25-30 mins',
            difficulty: 'Expert',
            tags: ['Wisdom', 'Decision-making', 'Growth', 'Reflection', 'Mentoring'],
            ageSpecific: 'Ages 36-59',
            objectives: [
                'Integrate life experience',
                'Enhance decision-making quality',
                'Develop mentoring capabilities',
                'Create personal legacy'
            ],
            exercises: 10,
            progressTracking: true
        },
        {
            id: 'legacy-building',
            title: 'Legacy Building System',
            icon: 'fas fa-seedling',
            category: 'Life Planning',
            description: 'Strategies for creating meaningful impact, planning for future generations, and building lasting personal and professional legacies.',
            duration: '35-40 mins',
            difficulty: 'Expert',
            tags: ['Legacy', 'Planning', 'Impact', 'Succession', 'Purpose'],
            ageSpecific: 'Ages 36-59',
            objectives: [
                'Define personal legacy goals',
                'Create impact strategies',
                'Develop succession plans',
                'Align actions with values'
            ],
            exercises: 12,
            progressTracking: true
        },
        {
            id: 'mid-career-reinvention',
            title: 'Mid-Career Reinvention Lab',
            icon: 'fas fa-sync-alt',
            category: 'Career Transition',
            description: 'Guidance for career pivots, skill reinvention, and navigating mid-career changes and opportunities.',
            duration: '28-33 mins',
            difficulty: 'Expert',
            tags: ['Career Change', 'Reinvention', 'Skills', 'Transition', 'Adaptation'],
            ageSpecific: 'Ages 36-59',
            objectives: [
                'Assess transferable skills',
                'Explore new career paths',
                'Develop reinvention plans',
                'Navigate career transitions'
            ],
            exercises: 9,
            progressTracking: true
        },
        {
            id: 'work-life-harmony',
            title: 'Work-Life Harmony Framework',
            icon: 'fas fa-balance-scale',
            category: 'Balance & Well-being',
            description: 'Advanced strategies for achieving work-life integration, maintaining energy, and sustaining long-term well-being.',
            duration: '30-35 mins',
            difficulty: 'Expert',
            tags: ['Balance', 'Well-being', 'Energy', 'Integration', 'Sustainability'],
            ageSpecific: 'Ages 36-59',
            objectives: [
                'Create sustainable work-life integration',
                'Develop energy management',
                'Enhance overall well-being',
                'Build resilience for longevity'
            ],
            exercises: 11,
            progressTracking: true
        }
    ],
    'senior': [
        {
            id: 'cognitive-vitality',
            title: 'Cognitive Vitality Program',
            icon: 'fas fa-brain',
            category: 'Brain Health',
            description: 'Evidence-based exercises and strategies to maintain and enhance cognitive function, memory, and mental agility.',
            duration: '20-25 mins',
            difficulty: 'Gentle',
            tags: ['Memory', 'Brain Health', 'Focus', 'Cognitive Maintenance', 'Neuroplasticity'],
            ageSpecific: 'Ages 60+',
            objectives: [
                'Maintain cognitive function',
                'Enhance memory retention',
                'Improve mental agility',
                'Support brain health'
            ],
            exercises: 8,
            progressTracking: true
        },
        {
            id: 'wisdom-sharing',
            title: 'Wisdom Sharing Platform',
            icon: 'fas fa-comments',
            category: 'Knowledge Transfer',
            description: 'Structured approaches for sharing life experience, accumulated wisdom, and mentoring younger generations.',
            duration: '25-30 mins',
            difficulty: 'Gentle',
            tags: ['Wisdom', 'Sharing', 'Storytelling', 'Mentoring', 'Legacy'],
            ageSpecific: 'Ages 60+',
            objectives: [
                'Structure life experiences',
                'Develop storytelling skills',
                'Create mentoring approaches',
                'Share accumulated wisdom'
            ],
            exercises: 7,
            progressTracking: true
        },
        {
            id: 'life-integration',
            title: 'Life Integration Workshop',
            icon: 'fas fa-infinity',
            category: 'Personal Reflection',
            description: 'Deep reflection exercises for making meaning of life experiences, finding purpose, and integrating past, present, and future.',
            duration: '30-35 mins',
            difficulty: 'Gentle',
            tags: ['Reflection', 'Meaning', 'Integration', 'Purpose', 'Life Review'],
            ageSpecific: 'Ages 60+',
            objectives: [
                'Integrate life experiences',
                'Find meaning and purpose',
                'Create personal narratives',
                'Develop life satisfaction'
            ],
            exercises: 9,
            progressTracking: true
        },
        {
            id: 'graceful-transition',
            title: 'Graceful Transition Guide',
            icon: 'fas fa-feather',
            category: 'Life Transitions',
            description: 'Support for navigating retirement, lifestyle changes, and creating fulfilling post-career lives.',
            duration: '22-28 mins',
            difficulty: 'Gentle',
            tags: ['Transitions', 'Retirement', 'Adaptation', 'Reinvention', 'Fulfillment'],
            ageSpecific: 'Ages 60+',
            objectives: [
                'Navigate life transitions smoothly',
                'Create fulfilling retirement',
                'Adapt to changing roles',
                'Maintain social connections'
            ],
            exercises: 8,
            progressTracking: true
        },
        {
            id: 'digital-empowerment',
            title: 'Digital Empowerment Hub',
            icon: 'fas fa-tablet-alt',
            category: 'Technology Skills',
            description: 'Practical guidance for using modern technology, staying connected, and leveraging digital tools for enrichment.',
            duration: '25-30 mins',
            difficulty: 'Gentle',
            tags: ['Technology', 'Digital Skills', 'Connection', 'Learning', 'Accessibility'],
            ageSpecific: 'Ages 60+',
            objectives: [
                'Develop digital literacy',
                'Stay socially connected',
                'Access online resources',
                'Use technology for enrichment'
            ],
            exercises: 7,
            progressTracking: true
        }
    ]
};

// Helper function to get modules by age category
function getModulesByAge(ageCategory) {
    return trainingModules[ageCategory] || [];
}

// Helper function to get module by ID
function getModuleById(moduleId) {
    for (const category in trainingModules) {
        const module = trainingModules[category].find(m => m.id === moduleId);
        if (module) return module;
    }
    return null;
}

// Helper function to get recommended modules based on assessment results
function getRecommendedModules(assessmentResults, ageCategory) {
    const allModules = getModulesByAge(ageCategory);
    const recommendations = [];
    
    // Analyze assessment results and recommend relevant modules
    if (assessmentResults['emotional-intelligence']) {
        const eiScore = assessmentResults['emotional-intelligence']['self_awareness']?.average || 0;
        if (eiScore < 3) {
            recommendations.push(...allModules.filter(m => 
                m.category.includes('Emotional') || m.category.includes('Social')));
        }
    }
    
    if (assessmentResults['stress-resilience']) {
        const stressScore = assessmentResults['stress-resilience']['stress_tolerance']?.average || 0;
        if (stressScore < 3) {
            recommendations.push(...allModules.filter(m => 
                m.category.includes('Stress') || m.category.includes('Well-being')));
        }
    }
    
    if (assessmentResults['cognitive-style']) {
        const cognitiveScore = assessmentResults['cognitive-style']['analytic_intuitive']?.average || 0;
        if (cognitiveScore < 2.5 || cognitiveScore > 3.5) {
            recommendations.push(...allModules.filter(m => 
                m.category.includes('Cognitive') || m.category.includes('Learning')));
        }
    }
    
    // Remove duplicates and return
    const uniqueRecommendations = Array.from(new Set(recommendations.map(m => m.id)))
        .map(id => recommendations.find(m => m.id === id));
    
    return uniqueRecommendations.length > 0 ? uniqueRecommendations : allModules.slice(0, 3);
}