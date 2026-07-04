const knowledgeBase = {
    internship: "During my Project Internship at The Akshaya Patra Foundation (June-July 2025), I designed a QR-based internal complaint tracking platform utilizing Google Apps Script. This system effectively slashed operational response latency loops by 35% across our operational tiers, and integrated customized Python LLM prompt engines to optimize transaction monitoring metrics.",
    water: "The Cyber-Physical System for Water Distribution Security was developed using Python and custom machine learning classification pipelines (Aug-Dec 2024). It maps critical telemetry fluctuations across pH values, overflow metrics, and turbidity data to stop malicious sensor-spoofing vectors with a verified 89% precision accuracy.",
    fraud: "The Online Payment Fraud Detection project utilized Random Forest and XGBoost ensemble algorithms to analyze metadata footprints (user behavior, amounts, locations). It achieved an 80% fraudulent transaction classification accuracy and was architected to pipe endpoints smoothly via backend REST APIs to digital banking networks.",
    varchas: "As the Festival Head of Varchas (IIT Jodhpur Sports Fest 2025), I pioneered the structural automation of workflow operations using n8n, Zapier, and Make configurations. This integration dropped manual coordination loads by 40% and expanded active social media campaign deployment speeds by 25%.",
    robotics: "As the Robotics Society Coordinator, I engineered custom agentic scripts running structural prompt workflows. This automated engineering sequences and repetitive data scheduling protocols, saving our research and developer groups over 20+ hours per week of overhead.",
    stack: "My core programming matrix covers Python, JavaScript, C++, Java, and C. My system development arsenal spans VS Code, GitHub, Google Apps Script, Arduino Uno, MATLAB, SolidWorks, and Linux OS architectures."
};

function askAI(promptText) {
    document.getElementById('user-query').value = promptText;
    processQuery();
}

function processQuery() {
    const queryInput = document.getElementById('user-query');
    const responseBox = document.getElementById('ai-response');
    const cleanedText = queryInput.value.toLowerCase();
    
    if(!cleanedText.trim()) return;
    
    responseBox.style.display = "block";
    responseBox.innerHTML = "⏳ Scanning internal credential databases...";
    
    setTimeout(() => {
        let answer = "🤖 [SYSTEM NOTE]: Query parameters matched general profile files. Satya Prakash Yadav is a B.Tech Computer Science Major undergraduate at IIT Jodhpur specializing in core Machine Learning engineering pipelines and enterprise-grade cloud automation workflows. Please use specific contact channels above for further recruitment verification.";
        
        if (cleanedText.includes('intern') || cleanedText.includes('akshaya') || cleanedText.includes('patra')) {
            answer = "🤖 " + knowledgeBase.internship;
        } else if (cleanedText.includes('water') || cleanedText.includes('spoof') || cleanedText.includes('anomaly')) {
            answer = "🤖 " + knowledgeBase.water;
        } else if (cleanedText.includes('fraud') || cleanedText.includes('payment') || cleanedText.includes('xgboost')) {
            answer = "🤖 " + knowledgeBase.fraud;
        } else if (cleanedText.includes('varchas') || cleanedText.includes('fest') || cleanedText.includes('zapier')) {
            answer = "🤖 " + knowledgeBase.varchas;
        } else if (cleanedText.includes('robotics') || cleanedText.includes('society') || cleanedText.includes('agent')) {
            answer = "🤖 " + knowledgeBase.robotics;
        } else if (cleanedText.includes('language') || cleanedText.includes('skill') || cleanedText.includes('stack') || cleanedText.includes('tool')) {
            answer = "🤖 " + knowledgeBase.stack;
        }
        
        responseBox.innerHTML = answer;
    }, 450);
}
