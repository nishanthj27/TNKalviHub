import type { Book, ClassInfo } from '@/data/books';

type SubjectProfile = {
  match: RegExp;
  overview: string;
  syllabus: string;
  mastery: string;
  study: string;
  revision: string;
  mediumTamil: string;
  mediumEnglish: string;
  termNotes: [string, string, string];
  fullYearNote: string;
  stageNotes: [string, string, string, string];
  routines: string[];
  mistakes: string[];
  examTips: string[];
  linkedSubjects: string[];
  linkBenefit: string;
};

export type BookDetailArticle = {
  bookName: string;
  intro: string[];
  syllabusHighlights: string[];
  studyGuidance: string[];
  examTips: string[];
  internalLinks: Array<{ label: string; href: string }>;
  internalLinkLead: string;
  internalLinkTail: string;
};

const profiles: SubjectProfile[] = [
  {
    match: /advance tamil|tamil/i,
    overview: 'This Tamil textbook develops reading taste, clear pronunciation, literary appreciation, grammar confidence, and expressive writing. Students meet prose passages, poems, moral reflections, cultural references, and language exercises that help them understand how Tamil is used in stories, public life, essays, and everyday speech.',
    syllabus: 'The Tamil syllabus normally moves through prose lessons, poetry, supplementary reading, grammar, vocabulary, letter writing, paragraph writing, and creative expression. Important study areas include author background, central idea, poetic meaning, figures of speech used in Tamil verse, grammar rules, word meanings, sentence correction, and answer writing in fluent Tamil.',
    mastery: 'A student has mastered Tamil when a poem can be explained line by line, a prose lesson can be summarised without copying the textbook, and grammar questions can be answered with correct examples. Good Tamil preparation also includes clean handwriting, correct spelling, respectful sentence tone, and confidence in writing answers with suitable opening and closing lines.',
    study: 'Read each lesson aloud first, then read it silently for meaning. Mark difficult Tamil words, write their meanings, and practise using those words in fresh sentences. For poems, learn the emotional idea before memorising lines. For grammar, prepare one page per rule with examples from the textbook rather than depending only on guide answers.',
    revision: 'For the 2026-2027 academic year, Tamil revision should include daily reading, weekly grammar drills, and regular writing practice. Students should maintain separate pages for poem meanings, prose summaries, important character references, grammar examples, and composition formats.',
    mediumTamil: 'Tamil Medium students should use the textbook language as the model for answer writing, especially for grammar, poetry explanation, and prose summaries.',
    mediumEnglish: 'English Medium students studying Tamil should spend extra time on spelling, sandhi-style word joining, pronunciation, and sentence flow because Tamil answer presentation matters as much as memory.',
    termNotes: [
      'In Term 1, build comfort with the textbook language. Read slowly, listen to classroom recitation, and learn basic meanings before attempting long answers.',
      'In Term 2, connect new lessons with earlier grammar rules and practise writing answers in complete Tamil sentences without mixing casual spoken forms.',
      'In Term 3, focus on retention: revise poems, grammar examples, one-word meanings, and composition formats before the final assessment.',
    ],
    fullYearNote: 'For a full-year Tamil book, divide prose, poetry, grammar, and writing practice across the year so that literature and language skills improve together.',
    stageNotes: [
      'At the primary level, the main goal is listening, speaking, reading small passages, and writing simple Tamil words neatly.',
      'At the upper-primary level, students should begin explaining stories, identifying moral ideas, and answering grammar exercises with examples.',
      'At the high-school level, Tamil study should become more precise, with stronger summaries, poem appreciation, grammar accuracy, and paragraph writing.',
      'At the Higher Secondary level, Tamil needs mature interpretation, literary vocabulary, structured essays, and confident handling of classical or modern passages.',
    ],
    routines: ['copy one well-written answer after understanding it', 'recite poems with meaning notes', 'prepare a personal Tamil word bank', 'write one short paragraph every week'],
    mistakes: ['memorising poem lines without meaning', 'mixing spoken Tamil with written Tamil', 'ignoring grammar examples', 'writing summaries that are too short'],
    examTips: ['Write poem explanations with the correct central idea', 'Revise grammar rules with examples from the lesson', 'Keep essay and letter formats clean', 'Learn author names, lesson titles, and key meanings accurately'],
    linkedSubjects: ['English', 'History', 'Social Science'],
    linkBenefit: 'compare language, culture, prose themes, and historical references from the same class level',
  },
  {
    match: /communicative english/i,
    overview: 'Communicative English is a practical language book built around listening, speaking, reading, and purposeful writing. It helps students use English for conversations, presentations, interviews, reports, notices, and real classroom communication instead of treating English only as a memory subject.',
    syllabus: 'The syllabus highlights functional vocabulary, dialogue practice, listening comprehension, role play, spoken responses, email writing, short reports, speeches, group discussion language, and polite professional expressions. Each unit should be studied as a communication situation with audience, tone, purpose, and correct language choice.',
    mastery: 'Mastery in Communicative English means students can respond naturally, organise thoughts before speaking, choose suitable expressions, and write practical messages without confusing informal and formal tone.',
    study: 'Practise every dialogue aloud. Record short answers, listen to pronunciation, and improve clarity. Prepare reusable phrases for greeting, requesting, explaining, disagreeing politely, and closing a conversation. Written tasks should be revised for tone, grammar, punctuation, and exact purpose.',
    revision: 'For 2026-2027, students should combine textbook exercises with real practice: one short speech, one dialogue, one listening summary, and one formal writing task every week.',
    mediumTamil: 'Tamil Medium learners should first understand the situation in Tamil, then practise expressing the same idea in simple, correct English.',
    mediumEnglish: 'English Medium learners should polish fluency, tone, and accuracy so that answers sound natural and not memorised.',
    termNotes: [
      'Term 1 should focus on confidence in simple classroom speech and correct sentence formation.',
      'Term 2 should improve fluency through role play, listening tasks, and longer responses.',
      'Term 3 should bring together speaking, listening, and writing tasks for assessment readiness.',
    ],
    fullYearNote: 'In a full-year book, spread speaking practice and writing formats across the year instead of waiting until the exam month.',
    stageNotes: [
      'At the primary level, students need clear pronunciation and simple response practice.',
      'At the upper-primary level, students should form short conversations and read aloud with expression.',
      'At the high-school level, students should handle speeches, dialogue writing, and practical messages.',
      'At the Higher Secondary level, communication should sound professional, organised, and audience-aware.',
    ],
    routines: ['read dialogues with a partner', 'record one-minute speeches', 'rewrite informal lines in formal English', 'maintain a phrase notebook'],
    mistakes: ['translating word by word from Tamil', 'using informal tone in formal writing', 'speaking too fast without clarity', 'ignoring punctuation in dialogue'],
    examTips: ['Use suitable greetings and closings', 'Keep dialogue punctuation accurate', 'Write formal messages with purpose and tone', 'Practise listening summaries in complete sentences'],
    linkedSubjects: ['English', 'Employability Skills', 'Commerce'],
    linkBenefit: 'strengthen vocabulary, workplace communication, formal writing, and presentation confidence',
  },
  {
    match: /english/i,
    overview: 'The English textbook builds comprehension, vocabulary, grammar, prose reading, poetry appreciation, supplementary reading, and composition skills. It trains students to read for meaning, identify tone, understand characters, answer in clear English, and write paragraphs, letters, notices, or essays with structure.',
    syllabus: 'The English syllabus covers prose lessons, poems, supplementary stories, grammar transformation, vocabulary, synonyms, antonyms, comprehension, paragraph writing, letter writing, dialogue writing, and short composition. Each chapter must be studied for theme, characters, setting, important lines, new words, and expected answer patterns.',
    mastery: 'A well-prepared English student can explain a prose passage, identify poetic devices, answer grammar without guesswork, and write original sentences instead of memorised fragments.',
    study: 'Read the lesson once for story, a second time for vocabulary, and a third time for answer points. Mark unfamiliar words, learn their usage, and practise grammar through short daily drills. Poems should be revised for speaker, mood, imagery, rhyme, and central idea.',
    revision: 'For 2026-2027, keep a chapter notebook with word meanings, character notes, poem summaries, grammar examples, and writing formats. Use textbook questions first, then try unseen passages and fresh writing tasks.',
    mediumTamil: 'Tamil Medium students should avoid word-by-word translation and should practise writing short English answers in their own sentence patterns.',
    mediumEnglish: 'English Medium students should focus on richer vocabulary, precise grammar, and paragraph flow so their answers do not remain too basic.',
    termNotes: [
      'Term 1 should establish reading habit, vocabulary collection, and basic grammar accuracy.',
      'Term 2 should improve comprehension, poem appreciation, and longer written answers.',
      'Term 3 should revise all writing formats, grammar transformations, and textbook-based short answers.',
    ],
    fullYearNote: 'In a full-year English book, revise literature and language side by side so grammar practice supports better writing.',
    stageNotes: [
      'At the primary level, reading aloud, spelling, and simple sentence formation matter most.',
      'At the upper-primary level, students should begin writing answers in complete sentences and retelling stories.',
      'At the high-school level, grammar, poem appreciation, and composition formats become scoring areas.',
      'At the Higher Secondary level, answers need mature vocabulary, textual understanding, and organised paragraphs.',
    ],
    routines: ['underline five new words per lesson', 'write character notes after prose chapters', 'practise one grammar pattern daily', 'rewrite weak paragraphs after correction'],
    mistakes: ['copying textbook lines without answering the question', 'forgetting poem figures of speech', 'mixing tenses in grammar answers', 'writing letters without format'],
    examTips: ['Answer comprehension with evidence from the passage', 'Revise poem themes and figures of speech', 'Follow letter and notice formats exactly', 'Keep grammar answers short and accurate'],
    linkedSubjects: ['Tamil', 'Communicative English', 'History'],
    linkBenefit: 'compare reading habits, vocabulary growth, story themes, and formal writing practice',
  },
  {
    match: /business mathematics|mathematics|maths/i,
    overview: 'Mathematics develops numerical accuracy, algebraic thinking, geometry, measurement, logical reasoning, statistics, and step-by-step problem solving. The book is not meant for passive reading; every idea becomes clear only when students work through examples, exercises, diagrams, constructions, and repeated problem practice.',
    syllabus: 'The syllabus includes number operations, fractions, decimals, algebra, equations, identities, geometry, mensuration, coordinate ideas, graphs, statistics, probability, and application problems according to class level. In Business Mathematics, the same mathematical habits are applied to commercial data, finance, probability, matrices, correlation, regression, and business decision problems.',
    mastery: 'A student has mastered Mathematics when the method can be explained, not just the answer. Correct formula selection, neat substitution, accurate calculation, diagram labelling, and checking the reasonableness of the answer are all part of the subject.',
    study: 'Begin each chapter with the worked examples. Cover the solution and try the problem again. Maintain a formula page, a theorem page, and a mistakes page. Geometry should be practised with ruler and pencil, while algebra should be practised with every step written clearly.',
    revision: 'For 2026-2027, Mathematics revision should be problem-heavy. Students should solve textbook examples, exercise sums, previous-year style questions, and mixed revision sets. Weak chapters must be revisited through smaller daily problem targets instead of one long sitting.',
    mediumTamil: 'Tamil Medium students should learn both Tamil mathematical terms and common English symbols so formulas, diagrams, and online explanations are easy to follow.',
    mediumEnglish: 'English Medium students should write mathematical statements precisely and avoid skipping explanation steps in proofs or word problems.',
    termNotes: [
      'Term 1 should build calculation discipline and basic chapter methods.',
      'Term 2 should strengthen multi-step problems and connect earlier formulas with new applications.',
      'Term 3 should focus on mixed revision, speed, accuracy, and avoiding careless errors.',
    ],
    fullYearNote: 'For a full-year Mathematics book, keep monthly targets for algebra, geometry, measurement, and statistics so no large chapter is left until the exam month.',
    stageNotes: [
      'At the primary level, number sense, shapes, measurement, and mental calculation should feel concrete.',
      'At the upper-primary level, students should become comfortable with fractions, decimals, patterns, and simple geometry.',
      'At the high-school level, algebra, theorems, graphs, and word problems need written steps and repeated practice.',
      'At the Higher Secondary level, derivations, functions, matrices, calculus, probability, and statistics demand disciplined problem sets.',
    ],
    routines: ['solve five textbook sums daily', 'rewrite one incorrect solution correctly', 'draw geometry figures before solving', 'revise formulas through examples'],
    mistakes: ['memorising formulas without knowing where to use them', 'skipping units in mensuration', 'drawing rough geometry diagrams', 'losing marks through sign errors'],
    examTips: ['Show every important calculation step', 'Write formulas before substitution', 'Label geometry figures and graph axes', 'Check signs, units, and final answer format'],
    linkedSubjects: ['Science', 'Physics', 'Statistics'],
    linkBenefit: 'see how calculation, measurement, graphs, and data handling support related textbook chapters',
  },
  {
    match: /environmental studies|evs/i,
    overview: 'Environmental Studies introduces young learners to family, school, neighbourhood, plants, animals, food, water, air, safety, health, seasons, festivals, and community life. The subject is built on observation, simple discussion, drawing, naming, matching, and connecting lessons with the child’s own surroundings.',
    syllabus: 'The syllabus includes family members, school habits, plants around us, animal homes, food habits, clean water, air, transport, safety rules, helpers, festivals, seasons, and simple environmental care. Each lesson should be connected to what children see at home, in school, on the street, and in nature.',
    mastery: 'A child understands EVS when they can name things correctly, explain simple uses, follow safety rules, draw basic pictures, and answer in short meaningful sentences.',
    study: 'Use the textbook with real objects. After reading a lesson on plants, observe leaves and flowers. After a lesson on food, sort foods by taste or health. After safety lessons, ask the child to explain what they would do in a real situation.',
    revision: 'For 2026-2027, EVS revision should be oral, visual, and activity-based. Children should practise picture naming, matching, fill in the blanks, simple diagrams, and one-line answers.',
    mediumTamil: 'Tamil Medium children should say the Tamil names clearly and then connect them with objects around them.',
    mediumEnglish: 'English Medium children should learn simple English names and use them in small sentences, not only single-word answers.',
    termNotes: [
      'Term 1 should focus on familiar surroundings, school habits, family, and basic observation.',
      'Term 2 should expand into plants, animals, food, water, and simple care for the environment.',
      'Term 3 should revise safety, health, seasons, helpers, and mixed picture-based questions.',
    ],
    fullYearNote: 'For a full-year EVS book, revise through observation walks, drawing, oral questions, and textbook activities.',
    stageNotes: [
      'At the primary level, EVS should feel close to the child’s real life and daily routine.',
      'At the upper-primary level, students can begin grouping, comparing, and explaining simple environmental ideas.',
      'At the high-school level, EVS topics usually merge into Science and Social Science preparation.',
      'At the Higher Secondary level, environmental ideas connect with Biology, Geography, and civic responsibility.',
    ],
    routines: ['name objects from pictures', 'draw and label simple things', 'answer oral questions after each lesson', 'connect one lesson with one home example'],
    mistakes: ['memorising without observation', 'ignoring picture questions', 'forgetting simple labels', 'writing answers longer than needed'],
    examTips: ['Practise picture identification', 'Draw simple labelled diagrams neatly', 'Learn safety rules with examples', 'Revise matching and one-word answers'],
    linkedSubjects: ['Science', 'Social Science', 'Tamil'],
    linkBenefit: 'connect observation, nature words, simple diagrams, and daily-life examples',
  },
  {
    match: /social science/i,
    overview: 'Social Science combines history, geography, civics, economics, maps, society, resources, government, and citizenship. The textbook helps students understand people, places, time, institutions, rights, duties, and the relationship between daily life and the wider world.',
    syllabus: 'The syllabus includes historical events, rulers or reformers, landforms, climate, resources, maps, local bodies, government systems, rights, duties, occupations, trade, and basic economic ideas. Students should study timelines, maps, definitions, tables, case examples, and chapter questions together.',
    mastery: 'Mastery in Social Science means a student can place events in order, locate places, explain civic terms, compare resources, and write point-wise answers with accurate names and dates.',
    study: 'History lessons should become timelines. Geography lessons should become maps and diagrams. Civics lessons should become definition charts. Economics lessons should become examples from markets, work, savings, and public services.',
    revision: 'For 2026-2027, prepare separate pages for dates, places, map marking, important persons, government terms, geography keywords, and short notes.',
    mediumTamil: 'Tamil Medium students should learn exact Tamil terms for government, geography, and history while keeping English place names clear.',
    mediumEnglish: 'English Medium students should write definitions precisely and avoid vague answers for civics and geography terms.',
    termNotes: [
      'Term 1 should build timeline habit, basic map reading, and clear understanding of social terms.',
      'Term 2 should connect history events, geography resources, and civic institutions through comparison tables.',
      'Term 3 should focus on map practice, short notes, dates, definitions, and mixed revision.',
    ],
    fullYearNote: 'For a full-year Social Science book, divide History, Geography, Civics, and Economics into regular weekly slots.',
    stageNotes: [
      'At the primary level, the subject introduces family, community, places, and simple civic habits.',
      'At the upper-primary level, students learn timelines, basic maps, local government, and resources.',
      'At the high-school level, map marking, long answers, dates, and civics definitions become important.',
      'At the Higher Secondary level, each branch becomes deeper and more analytical.',
    ],
    routines: ['mark maps weekly', 'write one timeline per history chapter', 'prepare civics definition cards', 'make resource-location tables'],
    mistakes: ['mixing dates and events', 'leaving map practice until the last day', 'writing civics answers without keywords', 'confusing similar geography terms'],
    examTips: ['Practise map marking repeatedly', 'Write dates, names, and places accurately', 'Use point-wise answers for civics', 'Revise geography diagrams and resource examples'],
    linkedSubjects: ['History', 'Geography', 'Economics'],
    linkBenefit: 'move deeper into timelines, maps, government ideas, resources, and economic examples',
  },
  {
    match: /^science$/i,
    overview: 'Science introduces students to observation, experiments, measurement, matter, energy, plants, animals, the human body, environment, light, sound, electricity, and everyday scientific reasoning. The book should be studied through concepts, activities, diagrams, definitions, and practical examples.',
    syllabus: 'The syllabus includes measurement, force, motion, light, sound, heat, matter, materials, acids and bases at suitable levels, plant life, animal life, human organs, health, environment, and simple experiments. Each chapter has concepts that must be seen through examples rather than memorised as isolated lines.',
    mastery: 'A student understands Science when they can explain why something happens, draw and label the relevant diagram, state definitions with keywords, and connect a textbook activity with the concept it proves.',
    study: 'Read the aim of each activity carefully. Write definitions separately, draw diagrams after reading, and revise examples from daily life. Physics portions need units and reasoning, Chemistry portions need terms and reactions, and Biology portions need labelled diagrams and process order.',
    revision: 'For 2026-2027, Science revision should rotate between definitions, diagrams, activities, short answers, and reasoning questions. Students should not leave diagrams and experiment-based questions for the final week.',
    mediumTamil: 'Tamil Medium students should learn Tamil scientific terms along with common English words used in diagrams and labelling.',
    mediumEnglish: 'English Medium students should use exact scientific vocabulary and avoid casual explanations in definition answers.',
    termNotes: [
      'Term 1 should build observation habit and basic definitions.',
      'Term 2 should strengthen diagrams, activities, and concept explanation.',
      'Term 3 should revise definitions, diagrams, experiments, and mixed reasoning questions.',
    ],
    fullYearNote: 'For a full-year Science book, plan separate revision cycles for Physics, Chemistry, Biology, and environmental chapters.',
    stageNotes: [
      'At the primary level, Science should begin with curiosity, naming, and simple observation.',
      'At the upper-primary level, students should start explaining processes and drawing labelled pictures.',
      'At the high-school level, diagrams, activities, definitions, and numerical reasoning become scoring areas.',
      'At the Higher Secondary level, Science branches become specialised and need deeper conceptual preparation.',
    ],
    routines: ['draw one diagram after every chapter', 'write definitions with keywords', 'explain one activity in your own words', 'revise textbook examples before guide notes'],
    mistakes: ['memorising activities without aim', 'forgetting labels in diagrams', 'using wrong units', 'writing vague reasons without scientific words'],
    examTips: ['Write definitions with exact keywords', 'Practise labelled diagrams', 'Mention observations and conclusions for activities', 'Use correct units in numerical questions'],
    linkedSubjects: ['Mathematics', 'Physics', 'Environmental Studies'],
    linkBenefit: 'connect observation, measurement, diagrams, experiments, and scientific vocabulary',
  },
  {
    match: /physics/i,
    overview: 'Physics studies motion, force, energy, heat, light, sound, electricity, magnetism, matter, waves, and modern physical ideas. The textbook expects students to understand laws, derive relations, solve numerical problems, draw diagrams, and explain real situations using physical principles.',
    syllabus: 'The syllabus includes laws of motion, work, energy, power, gravitation, properties of matter, heat transfer, ray optics, wave behaviour, electric current, circuits, magnetism, atomic ideas, and measurement depending on class level. Formula use must always be connected with units, conditions, and physical meaning.',
    mastery: 'Physics mastery means students can state a law, explain the situation where it applies, choose the correct formula, substitute values with units, draw the required diagram, and interpret the result.',
    study: 'Study every derivation line by line. For numerical problems, write known values, formula, substitution, calculation, and final unit. For optics and electricity, practise ray diagrams and circuit diagrams repeatedly. For mechanics, connect each law with motion examples.',
    revision: 'For 2026-2027, Physics revision should alternate between concept reading, derivations, diagrams, and numerical sets. Students preparing for board exams should keep a separate formula and unit notebook.',
    mediumTamil: 'Tamil Medium students should learn Tamil explanations and English symbols together because units, formulas, and diagram labels are often written in standard notation.',
    mediumEnglish: 'English Medium students should state laws in accurate scientific language and avoid skipping units in numerical answers.',
    termNotes: [
      'Term 1 should focus on basic laws, units, and concept clarity.',
      'Term 2 should improve numerical application, diagrams, and derivations.',
      'Term 3 should revise formulas, ray diagrams, circuits, and high-mark explanation questions.',
    ],
    fullYearNote: 'For a full-year Physics book, distribute mechanics, heat, optics, electricity, and modern physics into regular practice cycles.',
    stageNotes: [
      'At the primary level, Physics ideas appear as simple observations of light, sound, movement, and heat.',
      'At the upper-primary level, students begin measuring and explaining physical changes.',
      'At the high-school level, laws, diagrams, and numerical problems become central.',
      'At the Higher Secondary level, derivations, problem solving, and conceptual links become much deeper.',
    ],
    routines: ['solve three numerical problems daily', 'draw ray and circuit diagrams', 'revise units with formulas', 'explain one law using a real example'],
    mistakes: ['writing formulas without units', 'memorising derivations without meaning', 'drawing careless rays or circuits', 'rounding answers without checking'],
    examTips: ['Write units for every numerical answer', 'Practise ray diagrams and circuit diagrams', 'State laws with conditions', 'Show substitution steps clearly'],
    linkedSubjects: ['Mathematics', 'Chemistry', 'Computer Science'],
    linkBenefit: 'connect calculations, graphs, measurement, circuits, and scientific reasoning',
  },
  {
    match: /chemistry|bio chemistry/i,
    overview: 'Chemistry explains substances, atoms, molecules, elements, compounds, reactions, acids, bases, salts, metals, non-metals, organic compounds, and laboratory observations. It is a subject of symbols, equations, properties, changes, and careful reasoning from evidence.',
    syllabus: 'The syllabus includes atomic structure, periodic classification, valency, chemical bonding, acids and bases, salts, metals and non-metals, carbon compounds, organic reactions, chemical calculations, biomolecules in biochemistry, and laboratory methods. Equations and properties must be revised together.',
    mastery: 'A student has mastered Chemistry when symbols are written correctly, equations are balanced, reaction conditions are remembered, properties are compared clearly, and laboratory observations are explained using chemical ideas.',
    study: 'Prepare a reaction notebook. Write reactants, products, conditions, colour changes, gas evolved, and use of the reaction. Balance equations by hand. Revise the periodic table trends and valency frequently because many chapters depend on them.',
    revision: 'For 2026-2027, Chemistry revision should include daily symbol practice, weekly equation balancing, chapter-wise property tables, and repeated reading of textbook reactions.',
    mediumTamil: 'Tamil Medium students should connect Tamil chemical names with symbols and English element names so equations remain easy to write.',
    mediumEnglish: 'English Medium students should use precise chemical vocabulary and avoid spelling errors in compound names.',
    termNotes: [
      'Term 1 should strengthen symbols, valency, and basic properties.',
      'Term 2 should focus on reactions, acids, bases, salts, and comparison tables.',
      'Term 3 should revise equations, conditions, periodic trends, and application questions.',
    ],
    fullYearNote: 'For a full-year Chemistry book, plan separate cycles for theory, equations, properties, and laboratory-based questions.',
    stageNotes: [
      'At the primary level, Chemistry appears as materials, changes, and simple observations.',
      'At the upper-primary level, students start grouping materials and observing properties.',
      'At the high-school level, symbols, reactions, and equations become scoring areas.',
      'At the Higher Secondary level, bonding, organic chemistry, calculations, and mechanisms require deeper practice.',
    ],
    routines: ['balance five equations every week', 'make property tables', 'revise valency charts', 'write observations for important reactions'],
    mistakes: ['forgetting reaction conditions', 'using wrong symbols', 'leaving equations unbalanced', 'mixing acid and base properties'],
    examTips: ['Balance chemical equations correctly', 'Write conditions for important reactions', 'Revise periodic trends', 'Use exact compound names and symbols'],
    linkedSubjects: ['Physics', 'Botany', 'Zoology'],
    linkBenefit: 'connect reactions, lab observations, life processes, and material properties',
  },
  {
    match: /bio botany|botany/i,
    overview: 'Botany studies plants, plant tissues, morphology, anatomy, taxonomy, photosynthesis, respiration, reproduction, genetics, biotechnology, and plant ecology. The textbook asks students to understand plant structures, processes, classification, and economic importance through diagrams and precise terminology.',
    syllabus: 'The syllabus includes plant cell structure, tissues, roots, stems, leaves, flowers, plant families, taxonomy, photosynthesis, respiration, transport, plant hormones, reproduction, genetics, biotechnology, and useful plants. Diagram practice is essential because plant parts and processes are often tested visually.',
    mastery: 'Botany mastery means students can identify plant structures, compare families, explain physiological processes, write botanical terms correctly, and draw labelled diagrams without missing important parts.',
    study: 'Study one diagram with every concept. Prepare comparison tables for tissues, families, reproductive structures, and physiological processes. Learn botanical names carefully and connect each process with the plant part where it happens.',
    revision: 'For 2026-2027, Botany revision should include diagrams, terminology, classification charts, process flowcharts, and short notes on economic uses.',
    mediumTamil: 'Tamil Medium students should learn Tamil explanations and English botanical terms together because diagrams and scientific names use standard terminology.',
    mediumEnglish: 'English Medium students should focus on spelling, labelling, and precise biological phrasing.',
    termNotes: [
      'Term 1 should build plant structure vocabulary and diagram habit.',
      'Term 2 should strengthen processes such as photosynthesis, transport, and reproduction.',
      'Term 3 should revise classification, genetics, biotechnology, and high-mark diagrams.',
    ],
    fullYearNote: 'For a full-year Botany book, rotate plant anatomy, physiology, reproduction, genetics, and applied botany across the year.',
    stageNotes: [
      'At the primary level, Botany begins as naming plants and observing leaves, flowers, and seeds.',
      'At the upper-primary level, students learn plant parts, growth, and simple life processes.',
      'At the high-school level, diagrams, functions, and classification become important.',
      'At the Higher Secondary level, plant physiology, taxonomy, genetics, and biotechnology require exact preparation.',
    ],
    routines: ['draw plant diagrams from memory', 'prepare taxonomy tables', 'revise botanical names', 'write process steps in order'],
    mistakes: ['misplacing diagram labels', 'confusing plant families', 'forgetting scientific names', 'writing process steps out of order'],
    examTips: ['Label plant diagrams precisely', 'Revise botanical names carefully', 'Compare plant groups in tables', 'Write physiological processes step by step'],
    linkedSubjects: ['Zoology', 'Chemistry', 'Micro Biology'],
    linkBenefit: 'connect life processes, classification, biological terminology, and laboratory observation',
  },
  {
    match: /bio zoology|zoology/i,
    overview: 'Zoology studies animal diversity, human anatomy, physiology, reproduction, genetics, evolution, ecology, health, and applied biology. The textbook expects students to understand body systems, classification, life processes, diseases, and diagrams with correct biological language.',
    syllabus: 'The syllabus includes animal classification, tissues, organ systems, digestion, respiration, circulation, nervous coordination, reproduction, genetics, evolution, ecology, human health, and disease prevention. Diagrams and comparison charts are central to the subject.',
    mastery: 'A student has mastered Zoology when they can explain how an organ system works, identify structures in a diagram, compare animal groups, and write disease-cause-prevention points accurately.',
    study: 'Read each system as a sequence: organ, function, process, control, and result. Draw diagrams after reading. Make tables for phyla, hormones, diseases, symptoms, and prevention. Genetics problems should be solved step by step.',
    revision: 'For 2026-2027, Zoology revision should include diagram labelling, classification charts, physiology flowcharts, and disease tables.',
    mediumTamil: 'Tamil Medium students should connect Tamil explanations with English biological terms used in diagrams and scientific names.',
    mediumEnglish: 'English Medium students should practise exact spelling of biological terms and write process answers in proper sequence.',
    termNotes: [
      'Term 1 should build animal classification and body-system vocabulary.',
      'Term 2 should strengthen physiology, reproduction, and disease-prevention topics.',
      'Term 3 should revise diagrams, genetics, evolution, and high-mark process answers.',
    ],
    fullYearNote: 'For a full-year Zoology book, spread classification, physiology, genetics, and health topics into repeated revision cycles.',
    stageNotes: [
      'At the primary level, Zoology begins with animal names, habits, and body parts.',
      'At the upper-primary level, students compare animals and learn simple life processes.',
      'At the high-school level, organ systems, diagrams, and disease topics become important.',
      'At the Higher Secondary level, physiology, genetics, evolution, and applied biology require precise study.',
    ],
    routines: ['draw organ-system diagrams', 'make disease-prevention tables', 'compare animal groups', 'revise biological terms aloud'],
    mistakes: ['using vague terms for organs', 'forgetting diagram labels', 'mixing symptoms and causes', 'writing genetics answers without steps'],
    examTips: ['Draw neat anatomical diagrams', 'Use correct biological terminology', 'Revise disease tables', 'Write genetics and physiology answers in sequence'],
    linkedSubjects: ['Botany', 'Chemistry', 'Micro Biology'],
    linkBenefit: 'connect human biology, classification, health, microscopic life, and chemical processes',
  },
  {
    match: /micro biology/i,
    overview: 'Micro Biology studies bacteria, viruses, fungi, protozoa, microscopy, culture methods, sterilisation, immunity, fermentation, disease, food microbiology, and industrial applications. The subject is small in scale but very precise in language, diagrams, and laboratory method.',
    syllabus: 'The syllabus includes microbial cell structure, microscopy, staining, culture media, growth conditions, sterilisation methods, immunity, microbial diseases, food spoilage, fermentation, antibiotics, sanitation, and industrial uses of microorganisms.',
    mastery: 'Students master Micro Biology when they can identify organisms, explain lab procedures, compare sterilisation methods, connect pathogens with diseases, and describe useful microbes in food or industry.',
    study: 'Prepare organism-wise tables with structure, habitat, disease or use, mode of transmission, and prevention. Draw cells, viruses, and microscope parts. Revise procedures as ordered steps because practical method questions need sequence.',
    revision: 'For 2026-2027, Micro Biology revision should include diagrams, organism charts, disease tables, laboratory safety rules, and application examples.',
    mediumTamil: 'Tamil Medium students should learn Tamil explanations with English organism names and laboratory terms.',
    mediumEnglish: 'English Medium students should focus on spelling of organisms, methods, and disease names.',
    termNotes: [
      'Term 1 should build organism names, microscope basics, and cell-structure vocabulary.',
      'Term 2 should strengthen culture, sterilisation, immunity, and disease topics.',
      'Term 3 should revise industrial uses, food microbiology, disease prevention, and lab procedures.',
    ],
    fullYearNote: 'For a full-year Micro Biology book, balance theory, laboratory procedures, disease charts, and industrial applications across the year.',
    stageNotes: [
      'At the primary level, microbe ideas appear through hygiene and health.',
      'At the upper-primary level, students learn useful and harmful microorganisms.',
      'At the high-school level, disease, immunity, and simple lab ideas become clearer.',
      'At the Higher Secondary level, culture methods, microbial physiology, and applications require detailed study.',
    ],
    routines: ['draw microbial cells', 'prepare disease charts', 'write lab procedures in order', 'revise sterilisation methods'],
    mistakes: ['misspelling organism names', 'confusing bacteria and viruses', 'forgetting safety steps', 'mixing disease transmission routes'],
    examTips: ['Write organism names accurately', 'Draw microscope and cell diagrams neatly', 'Differentiate sterilisation methods', 'Revise disease symptoms and prevention'],
    linkedSubjects: ['Zoology', 'Botany', 'Chemistry'],
    linkBenefit: 'connect microscopic organisms, disease prevention, laboratory method, and biological processes',
  },
  {
    match: /history/i,
    overview: 'History studies past societies, rulers, movements, reformers, revolutions, colonial rule, freedom struggles, world events, social change, and the making of modern institutions. The textbook trains students to understand causes, events, effects, chronology, and historical evidence.',
    syllabus: 'The syllabus includes ancient, medieval, modern, Indian, Tamil Nadu, and world history topics depending on class level. Students should focus on timelines, important leaders, places, policies, social reforms, freedom movements, wars, treaties, and cause-effect relationships.',
    mastery: 'History is mastered when students can arrange events in order, explain why an event happened, describe its result, and write names, dates, and places accurately.',
    study: 'Create a timeline for every chapter. Group leaders with movements, rulers with achievements, and laws with effects. Write long answers using cause, event, and consequence so the answer does not become a loose list of facts.',
    revision: 'For 2026-2027, History revision should include timelines, short notes on personalities, important dates, movement names, and repeated reading of textbook boxes or source-based information.',
    mediumTamil: 'Tamil Medium students should learn historical Tamil terms and keep spelling of names and places consistent.',
    mediumEnglish: 'English Medium students should use clear historical vocabulary such as cause, consequence, reform, movement, empire, and nationalism.',
    termNotes: [
      'Term 1 should establish chronology and important names.',
      'Term 2 should focus on causes, movements, reforms, and comparison of events.',
      'Term 3 should revise timelines, short notes, and long-answer structure.',
    ],
    fullYearNote: 'For a full-year History book, create a continuous timeline across chapters so events do not feel disconnected.',
    stageNotes: [
      'At the primary level, History appears as stories of people, places, and community memory.',
      'At the upper-primary level, students begin learning rulers, kingdoms, and social life.',
      'At the high-school level, dates, movements, nationalism, and world events become scoring areas.',
      'At the Higher Secondary level, historical interpretation and analytical writing become more important.',
    ],
    routines: ['make chapter timelines', 'write leader-movement tables', 'revise dates weekly', 'summarise causes and effects separately'],
    mistakes: ['mixing similar movements', 'forgetting dates', 'writing long answers without order', 'confusing rulers or reformers'],
    examTips: ['Write dates and names accurately', 'Structure long answers as cause-event-result', 'Revise short notes on leaders', 'Avoid mixing similar movements'],
    linkedSubjects: ['Political Science', 'Geography', 'Tamil'],
    linkBenefit: 'connect historical events with places, governance, citizenship, and literary context',
  },
  {
    match: /geography/i,
    overview: 'Geography studies the earth, landforms, rivers, climate, soils, natural vegetation, resources, agriculture, industries, population, maps, and human interaction with environment. It is a visual subject where maps, diagrams, locations, and examples matter.',
    syllabus: 'The syllabus includes physical geography, Indian and Tamil Nadu geography, world geography, drainage, climate, soil, forests, agriculture, minerals, industries, transport, population, disasters, and map marking according to class level.',
    mastery: 'Geography mastery means students can locate places, explain why a resource is found in a region, connect climate with crops, read maps, and draw simple diagrams for landforms or weather concepts.',
    study: 'Keep an atlas or outline map nearby. Mark rivers, states, mountain ranges, mineral areas, ports, and crop regions. Prepare resource-location-use tables. Diagrams should be practised for landforms, rainfall, soil layers, and related physical processes.',
    revision: 'For 2026-2027, Geography revision should include map marking every week, location tables, diagram practice, climate-crop connections, and short notes on resources.',
    mediumTamil: 'Tamil Medium students should learn Tamil geography terms while keeping English place names and map spellings clear.',
    mediumEnglish: 'English Medium students should write location-based answers precisely and use terms such as plateau, basin, delta, monsoon, and density accurately.',
    termNotes: [
      'Term 1 should build map reading and physical geography basics.',
      'Term 2 should connect climate, soil, resources, agriculture, and industries.',
      'Term 3 should revise map marking, diagrams, locations, and short-answer keywords.',
    ],
    fullYearNote: 'For a full-year Geography book, map practice must continue from the first month, not only before exams.',
    stageNotes: [
      'At the primary level, Geography begins with home, school, directions, and local places.',
      'At the upper-primary level, students learn maps, landforms, weather, and resources.',
      'At the high-school level, map marking, India geography, resources, and population become important.',
      'At the Higher Secondary level, physical and human geography need analytical explanation.',
    ],
    routines: ['mark outline maps weekly', 'make resource-location tables', 'draw landform diagrams', 'connect climate with crops'],
    mistakes: ['spelling place names incorrectly', 'ignoring map practice', 'mixing weather and climate', 'writing resource answers without location'],
    examTips: ['Focus on map marking accuracy', 'Label diagrams with direction and scale where needed', 'Write location examples precisely', 'Revise resource examples state-wise'],
    linkedSubjects: ['History', 'Economics', 'Science'],
    linkBenefit: 'connect places, resources, climate, population, and historical or economic context',
  },
  {
    match: /economics/i,
    overview: 'Economics studies wants, resources, production, consumption, markets, money, banking, public finance, development, employment, trade, and economic choices. The textbook helps students understand how families, firms, governments, and nations make decisions with limited resources.',
    syllabus: 'The syllabus includes basic economic problems, factors of production, demand, supply, market forms, money, banking, public revenue, taxation, development indicators, Indian economy, poverty, employment, globalisation, and statistical interpretation depending on class level.',
    mastery: 'Economics is mastered when students can define terms, explain concepts with examples, read tables or graphs, compare similar ideas, and apply textbook points to real situations such as price changes, savings, work, or public services.',
    study: 'Convert every definition into an example. Prepare tables for differences such as wants and needs, direct and indirect tax, national income and per capita income, or public and private sector. Read textbook charts carefully before writing conclusions.',
    revision: 'For 2026-2027, Economics revision should include definitions, diagrams, examples, difference tables, short notes, and chapter-end questions.',
    mediumTamil: 'Tamil Medium students should learn exact Tamil economic terms and connect them with examples from markets, banks, and households.',
    mediumEnglish: 'English Medium students should use precise economic vocabulary and avoid general storytelling in answers.',
    termNotes: [
      'Term 1 should build definitions and basic economic reasoning.',
      'Term 2 should connect markets, money, banking, and public finance ideas.',
      'Term 3 should revise development, Indian economy topics, diagrams, and difference tables.',
    ],
    fullYearNote: 'For a full-year Economics book, prepare definitions early and revise application examples throughout the year.',
    stageNotes: [
      'At the primary level, economic ideas appear as work, needs, money, and sharing.',
      'At the upper-primary level, students learn occupations, resources, and simple trade.',
      'At the high-school level, banking, development, markets, and public finance become important.',
      'At the Higher Secondary level, theory, statistics, macroeconomic ideas, and policy topics require deeper writing.',
    ],
    routines: ['write definitions with examples', 'draw demand or flow diagrams', 'prepare difference tables', 'read data tables before conclusions'],
    mistakes: ['using vague examples', 'confusing similar terms', 'forgetting diagram labels', 'writing definitions without keywords'],
    examTips: ['Define terms before explaining', 'Use diagrams where the chapter expects them', 'Write examples from real economic life', 'Revise difference tables carefully'],
    linkedSubjects: ['Commerce', 'Accountancy', 'Statistics'],
    linkBenefit: 'connect markets, accounts, data, trade, banking, and financial decisions',
  },
  {
    match: /political science/i,
    overview: 'Political Science studies constitution, democracy, rights, duties, government institutions, elections, local bodies, public administration, citizenship, and international relations. The textbook helps students understand how power, law, representation, and public responsibility work.',
    syllabus: 'The syllabus includes constitutional principles, fundamental rights, duties, legislature, executive, judiciary, federalism, local government, election process, political parties, public policy, foreign policy, and citizen participation depending on class level.',
    mastery: 'Students master Political Science when they can define constitutional terms, compare institutions, explain powers and functions, and connect textbook ideas with civic life.',
    study: 'Prepare charts for Parliament, State Legislature, Executive, Judiciary, Election Commission, and local bodies. Write rights and duties separately. Learn process answers such as election steps in order.',
    revision: 'For 2026-2027, Political Science revision should include institution charts, definition cards, rights-duty lists, flowcharts for procedures, and short notes on constitutional ideas.',
    mediumTamil: 'Tamil Medium students should learn exact Tamil civics terms and avoid replacing them with casual words.',
    mediumEnglish: 'English Medium students should use terms such as constitution, sovereignty, democracy, jurisdiction, representation, and accountability correctly.',
    termNotes: [
      'Term 1 should build constitutional vocabulary and basic citizenship ideas.',
      'Term 2 should strengthen institutions, powers, functions, and election concepts.',
      'Term 3 should revise rights, duties, procedures, and comparison questions.',
    ],
    fullYearNote: 'For a full-year Political Science book, revise institutions and constitutional terms regularly so answers stay accurate.',
    stageNotes: [
      'At the primary level, civics begins with rules, responsibility, and community helpers.',
      'At the upper-primary level, students learn local government, rights, and duties.',
      'At the high-school level, constitution, elections, and institutions become important.',
      'At the Higher Secondary level, political theory and public administration need analytical writing.',
    ],
    routines: ['draw institution charts', 'write rights and duties separately', 'revise election steps', 'compare powers in tables'],
    mistakes: ['mixing rights and duties', 'confusing legislature and executive', 'writing vague functions', 'forgetting constitutional keywords'],
    examTips: ['Use exact constitutional terms', 'Compare institutions in table form', 'Revise election process steps', 'Keep rights and duties separate'],
    linkedSubjects: ['History', 'Economics', 'Geography'],
    linkBenefit: 'connect government, public policy, historical events, places, and economic decisions',
  },
  {
    match: /accountancy|auditing/i,
    overview: 'Accountancy and Auditing train students to record, classify, summarise, verify, and interpret financial information. The textbook is built around accuracy, formats, double-entry principles, ledger posting, trial balance, final accounts, adjustments, partnership or company accounts, and audit evidence.',
    syllabus: 'The syllabus includes accounting concepts, journal entries, ledger accounts, subsidiary books, cash book, trial balance, final accounts, depreciation, bills, partnership accounts, company accounts, audit planning, internal control, vouchers, verification, and reporting according to the book title.',
    mastery: 'Students master this subject when debit and credit logic becomes automatic, formats are remembered, adjustments are handled correctly, and every amount can be traced from entry to final statement or audit conclusion.',
    study: 'Practise journal entries daily. After each entry, ask which account receives benefit and which account gives benefit. Redraw ledger and final-account formats until they become familiar. For Auditing, learn procedure, evidence, objective, and report language together.',
    revision: 'For 2026-2027, revision should include format writing, adjustment entries, ledger posting, trial-balance checking, final-account problems, and audit terminology.',
    mediumTamil: 'Tamil Medium students should connect Tamil accounting terms with English format headings used in accounts.',
    mediumEnglish: 'English Medium students should write narration, headings, and audit terms precisely.',
    termNotes: [
      'Term 1 should build debit-credit logic and basic formats.',
      'Term 2 should strengthen ledgers, trial balance, and adjustments.',
      'Term 3 should revise final accounts, partnership or company accounts, and audit procedures.',
    ],
    fullYearNote: 'For a full-year Accountancy or Auditing book, formats must be practised throughout the year because last-minute memorisation leads to mistakes.',
    stageNotes: [
      'At the primary level, account ideas appear only as money awareness.',
      'At the upper-primary level, students may meet simple records and arithmetic connected with money.',
      'At the high-school level, commerce-related accounting basics begin to matter.',
      'At the Higher Secondary level, formats, adjustments, company accounts, and audit procedures become major scoring areas.',
    ],
    routines: ['write journal entries daily', 'redraw account formats', 'check debit and credit totals', 'prepare adjustment-entry lists'],
    mistakes: ['reversing debit and credit', 'forgetting narrations', 'copying formats incorrectly', 'ignoring adjustment effects'],
    examTips: ['Write narrations briefly and accurately', 'Draw account formats neatly', 'Verify totals before moving ahead', 'Revise adjustment entries and audit terms'],
    linkedSubjects: ['Commerce', 'Economics', 'Business Mathematics and Statistics'],
    linkBenefit: 'connect trade, financial records, business decisions, and numerical accuracy',
  },
  {
    match: /commerce/i,
    overview: 'Commerce introduces trade, business organisation, entrepreneurship, banking, insurance, marketing, transport, warehousing, company forms, consumer protection, and business services. The textbook explains how goods, services, money, risk, ownership, and customers move through the business world.',
    syllabus: 'The syllabus includes sole trade, partnership, joint stock company, cooperative societies, banking services, insurance, transport, warehousing, advertising, marketing, entrepreneurship, consumer rights, business ethics, and trade channels depending on class level.',
    mastery: 'Commerce is mastered when students can define business terms, compare forms of organisation, explain merits and limitations, and connect textbook points with real shops, banks, companies, and consumer situations.',
    study: 'Use comparison tables heavily. Write features, merits, limitations, and examples for each business form. Connect banking and insurance chapters with real documents such as passbooks, policies, cheques, or digital payment records.',
    revision: 'For 2026-2027, Commerce revision should include definitions, difference tables, flowcharts for trade channels, short notes on services, and examples from current business life.',
    mediumTamil: 'Tamil Medium students should learn Tamil commerce terms while remembering common English business words used in forms and services.',
    mediumEnglish: 'English Medium students should write business terms precisely and support answers with suitable examples.',
    termNotes: [
      'Term 1 should build business vocabulary and organisation basics.',
      'Term 2 should strengthen banking, insurance, marketing, and service chapters.',
      'Term 3 should revise comparison tables, consumer protection, entrepreneurship, and short notes.',
    ],
    fullYearNote: 'For a full-year Commerce book, revise definitions and comparison tables every month because they carry many marks.',
    stageNotes: [
      'At the primary level, commerce ideas appear as buying, selling, saving, and occupations.',
      'At the upper-primary level, students understand simple trade and services.',
      'At the high-school level, business terms and consumer awareness become clearer.',
      'At the Higher Secondary level, organisation forms, banking, marketing, and entrepreneurship require structured answers.',
    ],
    routines: ['prepare comparison tables', 'write business definitions with examples', 'draw trade flowcharts', 'revise merits and limitations'],
    mistakes: ['mixing partnership and company features', 'writing definitions without examples', 'forgetting legal terms', 'confusing banking and insurance functions'],
    examTips: ['Write differences in point form', 'Revise merits and limitations', 'Use current business examples', 'Keep legal and organisation terms accurate'],
    linkedSubjects: ['Accountancy', 'Economics', 'Business Mathematics and Statistics'],
    linkBenefit: 'connect business organisations, accounts, markets, banking, and trade calculations',
  },
  {
    match: /computer science|computer applications/i,
    overview: 'Computer Science and Computer Applications develop computational thinking, algorithms, flowcharts, programming logic, data handling, databases, spreadsheets, presentation tools, internet concepts, web basics, and practical digital skills. The textbook mixes theory with hands-on practice.',
    syllabus: 'The syllabus includes algorithms, flowcharts, programming basics, control structures, functions, arrays or data structures where applicable, database concepts, SQL basics, spreadsheets, word processing, presentations, HTML, internet safety, and software application tasks depending on the class and book.',
    mastery: 'Students master the subject when they can trace code, predict output, draw correct flowcharts, explain software steps, use database terms accurately, and complete practical tasks without memorising only menu names.',
    study: 'Write algorithms before code. Trace sample programs line by line. Practise flowchart symbols, syntax, output questions, database tables, spreadsheet formulas, and HTML tags by actually writing them.',
    revision: 'For 2026-2027, revision should include syntax sheets, output practice, flowchart drawing, database definitions, spreadsheet tasks, and practical screenshots or notes.',
    mediumTamil: 'Tamil Medium students should understand concepts in Tamil but practise commands, syntax, and software labels in English.',
    mediumEnglish: 'English Medium students should focus on exact technical vocabulary and clean program presentation.',
    termNotes: [
      'Term 1 should build algorithmic thinking and basic software vocabulary.',
      'Term 2 should strengthen programming, databases, spreadsheets, or web tasks.',
      'Term 3 should revise output questions, flowcharts, practical steps, and definitions.',
    ],
    fullYearNote: 'For a full-year Computer book, practical work should continue weekly because software confidence cannot be built by reading alone.',
    stageNotes: [
      'At the primary level, computer learning begins with parts, uses, and basic operations.',
      'At the upper-primary level, students learn simple applications, files, and internet awareness.',
      'At the high-school level, algorithms, programs, and application tools become important.',
      'At the Higher Secondary level, programming logic, databases, and computational concepts need deeper practice.',
    ],
    routines: ['trace one program daily', 'draw flowcharts with correct symbols', 'practise spreadsheet or database tasks', 'write syntax without looking'],
    mistakes: ['memorising code without tracing', 'using wrong flowchart symbols', 'forgetting semicolons or tags', 'mixing database field and record meanings'],
    examTips: ['Indent code clearly', 'Revise syntax and output questions', 'Draw flowcharts with correct symbols', 'Write database and spreadsheet terms accurately'],
    linkedSubjects: ['Mathematics', 'Physics', 'Employability Skills'],
    linkBenefit: 'connect algorithms, numerical logic, digital tools, and workplace computer skills',
  },
  {
    match: /statistics/i,
    overview: 'Statistics teaches students to collect, organise, present, analyse, and interpret data. The textbook focuses on frequency tables, averages, dispersion, correlation, regression, probability, sampling, index numbers, and conclusions drawn from numerical evidence.',
    syllabus: 'The syllabus includes data classification, tabulation, diagrams, measures of central tendency, measures of dispersion, correlation, regression, time series, index numbers, probability, sampling ideas, and interpretation of statistical results according to class level.',
    mastery: 'Statistics is mastered when students can choose the correct method, prepare tables accurately, substitute values carefully, draw diagrams neatly, and explain what the result says about the data.',
    study: 'Work with tables slowly. Write formulas, identify variables, substitute values, and check arithmetic. Practise drawing bar diagrams, frequency curves, and other statistical presentations with clear titles and labels.',
    revision: 'For 2026-2027, Statistics revision should include formula sheets, solved examples, diagram practice, calculator-style arithmetic checking, and interpretation sentences.',
    mediumTamil: 'Tamil Medium students should learn Tamil explanations while keeping symbols and formula notation standard.',
    mediumEnglish: 'English Medium students should write statistical conclusions in clear, precise English.',
    termNotes: [
      'Term 1 should build table reading and average calculation.',
      'Term 2 should strengthen dispersion, correlation, regression, and diagrams.',
      'Term 3 should revise probability, index numbers, mixed problems, and interpretations.',
    ],
    fullYearNote: 'For a full-year Statistics book, revise formulas through solved problems instead of memorising them separately.',
    stageNotes: [
      'At the primary level, data appears through counting and simple charts.',
      'At the upper-primary level, students learn tables and basic graphs.',
      'At the high-school level, averages, graphs, and probability become important.',
      'At the Higher Secondary level, correlation, regression, index numbers, and inference require careful numerical work.',
    ],
    routines: ['prepare formula sheets', 'draw diagrams with labels', 'solve one data table daily', 'write interpretation after calculation'],
    mistakes: ['copying table values incorrectly', 'forgetting graph labels', 'using wrong formula', 'leaving answers without interpretation'],
    examTips: ['Show formula substitution clearly', 'Draw neat statistical tables and diagrams', 'Check arithmetic twice', 'Write a short conclusion for data answers'],
    linkedSubjects: ['Mathematics', 'Economics', 'Commerce'],
    linkBenefit: 'connect data interpretation, commercial decisions, economic tables, and mathematical accuracy',
  },
  {
    match: /agricultural science/i,
    overview: 'Agricultural Science studies soil, crops, seeds, irrigation, farm tools, plant protection, livestock, organic practices, weather, farm management, and the science behind food production. The textbook connects classroom learning with Tamil Nadu farming conditions and practical field awareness.',
    syllabus: 'The syllabus includes soil types, crop selection, seed treatment, sowing methods, manures, fertilisers, irrigation, pest and disease control, harvesting, storage, farm machinery, animal husbandry, and sustainable agriculture.',
    mastery: 'Students master Agricultural Science when they can explain crop practices in order, connect soil and water with plant growth, identify pest-control methods, and describe safe, productive farming decisions.',
    study: 'Prepare crop-wise notes with season, soil, seed rate where applicable, irrigation, pest control, harvest, and storage. Diagrams of tools, plant parts, and farm layouts should be labelled neatly.',
    revision: 'For 2026-2027, revision should include crop calendars, soil charts, pest-disease tables, irrigation methods, farm tool diagrams, and short notes on sustainable practices.',
    mediumTamil: 'Tamil Medium students should learn local Tamil agricultural terms along with standard scientific names used in the textbook.',
    mediumEnglish: 'English Medium students should connect technical terms with real farm practices and local examples.',
    termNotes: [
      'Term 1 should build soil, seed, and crop-foundation concepts.',
      'Term 2 should strengthen irrigation, nutrients, plant protection, and farm operations.',
      'Term 3 should revise harvest, storage, livestock, sustainability, and application questions.',
    ],
    fullYearNote: 'For a full-year Agricultural Science book, connect each chapter with seasonal farm activity so the subject stays practical.',
    stageNotes: [
      'At the primary level, agriculture begins as food, plants, and farm awareness.',
      'At the upper-primary level, students can learn soil, water, crops, and simple tools.',
      'At the high-school level, crop practice and farm science become more detailed.',
      'At the Higher Secondary level, agriculture needs scientific reasoning, field application, and technical vocabulary.',
    ],
    routines: ['make crop-wise tables', 'draw farm tools', 'revise soil and irrigation charts', 'connect lessons with local crops'],
    mistakes: ['mixing crop seasons', 'forgetting pest-control steps', 'writing vague farm examples', 'ignoring storage and safety points'],
    examTips: ['Write crop practices in correct order', 'Revise soil and irrigation differences', 'Label farm-tool diagrams clearly', 'Use local crop examples where suitable'],
    linkedSubjects: ['Botany', 'Chemistry', 'Geography'],
    linkBenefit: 'connect plant growth, soil, climate, nutrients, and practical farming decisions',
  },
  {
    match: /nutrition|food service/i,
    overview: 'Nutrition, Dietetics, and Food Service Management teach nutrients, balanced diet, meal planning, hygiene, food safety, preservation, therapeutic diets, kitchen organisation, service methods, and health-focused food decisions.',
    syllabus: 'The syllabus includes carbohydrates, proteins, fats, vitamins, minerals, water, balanced diets, deficiency diseases, meal planning, food preservation, kitchen hygiene, food service systems, menu planning, therapeutic diets, and safe storage.',
    mastery: 'Students master the subject when they can plan diets for different groups, identify nutrient functions, explain deficiency symptoms, follow hygiene rules, and connect food service decisions with health and safety.',
    study: 'Prepare nutrient charts with source, function, deficiency, and examples. Plan sample menus for children, adolescents, workers, patients, and elderly persons where relevant. Learn hygiene rules with reasons, not as isolated points.',
    revision: 'For 2026-2027, revision should include diet charts, nutrient tables, deficiency notes, preservation methods, hygiene checklists, and menu-planning practice.',
    mediumTamil: 'Tamil Medium students should connect Tamil food names with nutrient terms and health vocabulary.',
    mediumEnglish: 'English Medium students should use exact nutrition terminology and write diet plans neatly.',
    termNotes: [
      'Term 1 should build nutrient basics and food-group awareness.',
      'Term 2 should strengthen meal planning, deficiency diseases, and preservation.',
      'Term 3 should revise therapeutic diets, hygiene, service management, and menu presentation.',
    ],
    fullYearNote: 'For a full-year Nutrition or Food Service book, revise diet planning through real menus rather than definitions alone.',
    stageNotes: [
      'At the primary level, nutrition begins as healthy food habits.',
      'At the upper-primary level, students learn food groups and hygiene.',
      'At the high-school level, nutrients, health, and deficiency ideas become clearer.',
      'At the Higher Secondary level, dietetics and food service require detailed planning and technical terms.',
    ],
    routines: ['make nutrient charts', 'plan weekly sample menus', 'revise deficiency symptoms', 'write hygiene rules with reasons'],
    mistakes: ['mixing nutrient sources', 'forgetting deficiency symptoms', 'writing diet charts without balance', 'ignoring food safety points'],
    examTips: ['Write diet charts neatly', 'Mention nutrient deficiency symptoms', 'Use correct hygiene terms', 'Revise preservation methods with examples'],
    linkedSubjects: ['Home Science', 'Zoology', 'Chemistry'],
    linkBenefit: 'connect food, health, body systems, hygiene, and household planning',
  },
  {
    match: /nursing/i,
    overview: 'General Nursing introduces patient care, hygiene, first aid, vital signs, basic anatomy, infection control, nutrition, community health, nursing ethics, and safe care routines. The subject is practical, disciplined, and service-oriented.',
    syllabus: 'The syllabus includes personal hygiene, bed making, patient comfort, first aid, wounds, bandaging, vital signs, basic body systems, infection prevention, nutrition, community health, maternal and child care where relevant, and professional conduct.',
    mastery: 'Students master Nursing when procedures can be written in order, safety points are remembered, symptoms are recognised, and patient dignity is respected in every answer.',
    study: 'Learn procedures as steps: preparation, action, observation, safety, and after-care. Revise anatomy diagrams, first-aid responses, hygiene routines, and infection-control reasons.',
    revision: 'For 2026-2027, Nursing revision should include procedure charts, first-aid tables, anatomy labels, hygiene principles, and community-health short notes.',
    mediumTamil: 'Tamil Medium students should learn Tamil care instructions and standard English medical terms together.',
    mediumEnglish: 'English Medium students should use accurate health vocabulary and write procedures in a calm, ordered style.',
    termNotes: [
      'Term 1 should build hygiene, care, and first-aid basics.',
      'Term 2 should strengthen vital signs, anatomy, infection control, and nutrition.',
      'Term 3 should revise procedures, community health, patient safety, and practical answer formats.',
    ],
    fullYearNote: 'For a full-year Nursing book, revise procedures repeatedly because order and safety are central to marks.',
    stageNotes: [
      'At the primary level, nursing ideas appear through hygiene and first help.',
      'At the upper-primary level, students can learn health habits and safety.',
      'At the high-school level, body systems and first aid become clearer.',
      'At the Higher Secondary level, care procedures and community health need professional detail.',
    ],
    routines: ['write procedures in order', 'draw basic anatomy diagrams', 'make first-aid response tables', 'revise infection-control steps'],
    mistakes: ['missing safety steps', 'writing procedures out of order', 'using vague medical words', 'forgetting hygiene reasons'],
    examTips: ['Write procedures in correct order', 'Mention hygiene and safety points', 'Label anatomy diagrams clearly', 'Revise first-aid examples thoroughly'],
    linkedSubjects: ['Zoology', 'Nutrition and Dietetics', 'Chemistry'],
    linkBenefit: 'connect body systems, nutrition, hygiene, health care, and disease prevention',
  },
  {
    match: /office management|employability/i,
    overview: 'Office Management, Secretaryship, Typography, Computer Applications, and Employability Skills prepare students for organised workplace behaviour. The textbook focuses on communication, records, office procedure, typing, computer use, customer handling, interviews, ethics, and professional confidence.',
    syllabus: 'The syllabus includes office organisation, filing, records, business correspondence, meeting procedure, typing practice, computer applications, workplace communication, resume preparation, interview skills, teamwork, time management, and office ethics.',
    mastery: 'Students master the subject when they can prepare documents in correct format, explain office procedures in order, type accurately, use workplace language, and show readiness for interviews or office tasks.',
    study: 'Practise formats repeatedly: letters, notices, reports, agendas, minutes, resumes, and official records. Build typing accuracy before speed. For computer tasks, write step-by-step notes and practise them on screen.',
    revision: 'For 2026-2027, revision should include document formats, typing drills, office-procedure flowcharts, computer task steps, interview questions, and workplace vocabulary.',
    mediumTamil: 'Tamil Medium students should understand procedures in Tamil while practising official document headings and computer labels in English.',
    mediumEnglish: 'English Medium students should focus on professional tone, accurate formats, and concise workplace language.',
    termNotes: [
      'Term 1 should build office vocabulary, typing basics, and document awareness.',
      'Term 2 should strengthen correspondence, records, computer tasks, and communication.',
      'Term 3 should revise interview readiness, office procedure, formats, and practical skills.',
    ],
    fullYearNote: 'For a full-year office or employability book, practical routines should be repeated weekly because skill subjects improve through use.',
    stageNotes: [
      'At the primary level, employability begins as discipline, neatness, and communication.',
      'At the upper-primary level, students can learn teamwork and simple digital habits.',
      'At the high-school level, workplace awareness and computer confidence become useful.',
      'At the Higher Secondary level, office procedures, typing, and employability skills need professional preparation.',
    ],
    routines: ['practise document formats', 'complete typing drills', 'prepare interview answers', 'write computer steps after practice'],
    mistakes: ['using wrong document format', 'typing fast with many errors', 'writing casual office language', 'forgetting procedure order'],
    examTips: ['Follow exact document formats', 'Write office procedures in sequence', 'Use professional vocabulary', 'Revise computer application steps carefully'],
    linkedSubjects: ['Communicative English', 'Commerce', 'Computer Applications'],
    linkBenefit: 'connect workplace communication, business records, typing, and practical computer use',
  },
  {
    match: /home science|textiles|dress designing/i,
    overview: 'Home Science, Textiles, Textile Technology, and Dress Designing connect family resources, fabric knowledge, clothing construction, nutrition, home care, design principles, consumer choices, fibre properties, weaving, dyeing, and garment planning.',
    syllabus: 'The syllabus includes family resource management, food and nutrition where relevant, fibre types, yarn, weaving, dyeing, printing, fabric care, garment construction, measurements, stitches, pattern making, design elements, consumer selection, and home management.',
    mastery: 'Students master the subject when they can identify fibres, compare fabric properties, draw construction steps, explain design choices, and connect clothing or home decisions with comfort, cost, care, and purpose.',
    study: 'Collect small fabric examples if possible. Prepare fibre-property tables. Draw stitch, pattern, garment, and design diagrams neatly. Learn care symbols, measurement steps, and construction order through repeated practice.',
    revision: 'For 2026-2027, revision should include fibre charts, fabric-care tables, garment diagrams, design principles, measurement notes, and short answers on home or consumer decisions.',
    mediumTamil: 'Tamil Medium students should connect local clothing vocabulary with technical textile terms.',
    mediumEnglish: 'English Medium students should use precise textile and design vocabulary in descriptions.',
    termNotes: [
      'Term 1 should build fibre, fabric, and home-management basics.',
      'Term 2 should strengthen construction, design, care, and consumer topics.',
      'Term 3 should revise diagrams, fibre tables, garment steps, and practical applications.',
    ],
    fullYearNote: 'For a full-year textiles or home science book, practical diagrams and fibre tables should be revised across the year.',
    stageNotes: [
      'At the primary level, home science ideas appear through food, clothing, cleanliness, and family habits.',
      'At the upper-primary level, students learn simple fabric, food, and home-care ideas.',
      'At the high-school level, design, nutrition, and family resources become clearer.',
      'At the Higher Secondary level, textile technology, garment construction, and home science require technical detail.',
    ],
    routines: ['make fibre-property tables', 'draw garment construction steps', 'revise care methods', 'connect design principles with clothing examples'],
    mistakes: ['mixing fibre properties', 'forgetting measurement order', 'drawing unclear garment diagrams', 'writing design answers without examples'],
    examTips: ['Draw garment and stitch diagrams neatly', 'Revise fibre properties', 'Write design principles with examples', 'Prepare home-management short notes'],
    linkedSubjects: ['Nutrition and Dietetics', 'Chemistry', 'Commerce'],
    linkBenefit: 'connect fabric, food, household decisions, material properties, and consumer awareness',
  },
  {
    match: /physical education/i,
    overview: 'Physical Education studies fitness, sports skills, rules of games, training methods, health, yoga, posture, sports injuries, nutrition, leadership, and disciplined practice. The textbook connects theory with movement, safety, and healthy living.',
    syllabus: 'The syllabus includes physical fitness components, athletics, major games, rules, court and field measurements, yoga, warm-up, cool-down, training principles, sports injuries, first aid, health habits, nutrition, and sports leadership.',
    mastery: 'Students master Physical Education when they know game rules, can draw courts or fields, understand fitness components, explain training methods, and connect health theory with daily practice.',
    study: 'Study each game with its field layout, rules, skills, fouls, and scoring method. Fitness topics should be connected with actual drills. Injury chapters should be revised with prevention, first aid, and safe practice steps.',
    revision: 'For 2026-2027, revision should include court diagrams, game rules, fitness definitions, yoga benefits, injury-prevention tables, and health notes.',
    mediumTamil: 'Tamil Medium students should learn Tamil explanations with standard English game terms where used.',
    mediumEnglish: 'English Medium students should use correct sports vocabulary and measurement terms.',
    termNotes: [
      'Term 1 should build fitness vocabulary, warm-up habits, and basic game rules.',
      'Term 2 should strengthen training methods, game skills, and yoga or health topics.',
      'Term 3 should revise court diagrams, injuries, rules, and fitness definitions.',
    ],
    fullYearNote: 'For a full-year Physical Education book, connect textbook theory with regular movement practice.',
    stageNotes: [
      'At the primary level, physical education begins with movement, play, and healthy habits.',
      'At the upper-primary level, students learn rules, teamwork, and basic fitness.',
      'At the high-school level, game rules, measurements, and health theory become important.',
      'At the Higher Secondary level, training principles, physiology, and sports organisation require deeper understanding.',
    ],
    routines: ['draw courts and fields', 'revise game rules', 'track fitness components', 'write injury-prevention steps'],
    mistakes: ['confusing game measurements', 'forgetting warm-up steps', 'writing rules vaguely', 'ignoring safety points'],
    examTips: ['Draw courts and fields neatly', 'Write rules in point form', 'Revise fitness definitions', 'Mention safety and warm-up steps'],
    linkedSubjects: ['General Nursing', 'Nutrition and Dietetics', 'Zoology'],
    linkBenefit: 'connect fitness, body systems, nutrition, first aid, and healthy practice',
  },
  {
    match: /electrical|electronics|automobile|mechanical|civil/i,
    overview: 'This engineering textbook develops technical understanding of machines, materials, tools, drawings, measurements, circuits or structures, workshop safety, maintenance, and applied problem solving. The focus is practical: students must understand how parts work, how systems are represented, and how safety is maintained.',
    syllabus: 'Depending on the title, the syllabus includes engineering materials, measuring instruments, drawing basics, machine elements, engines, structures, electrical circuits, electronic components, wiring, tools, workshop processes, maintenance, and safety precautions.',
    mastery: 'Students master an engineering subject when they can identify parts, draw labelled technical diagrams, explain working principles, use units correctly, and describe safe procedures in the correct order.',
    study: 'Study every diagram as a system. Learn the name, function, material, and safety point for each part. Measurement problems should be written with units, and workshop topics should be revised as procedure steps.',
    revision: 'For 2026-2027, revision should include labelled diagrams, tool-purpose tables, safety rules, unit practice, working-principle notes, and maintenance steps.',
    mediumTamil: 'Tamil Medium students should learn local workshop terms along with standard English technical names.',
    mediumEnglish: 'English Medium students should write technical explanations in precise, ordered language.',
    termNotes: [
      'Term 1 should build tool names, material basics, and safety habits.',
      'Term 2 should strengthen working principles, diagrams, measurements, and procedures.',
      'Term 3 should revise maintenance, applications, safety rules, and high-mark diagrams.',
    ],
    fullYearNote: 'For a full-year engineering book, diagram practice and safety points should continue from the first chapter.',
    stageNotes: [
      'At the primary level, engineering ideas appear as simple tools and machines.',
      'At the upper-primary level, students learn basic materials, movement, and uses.',
      'At the high-school level, measurements, circuits, structures, and mechanical ideas become clearer.',
      'At the Higher Secondary level, vocational engineering topics require technical diagrams and practical procedure knowledge.',
    ],
    routines: ['draw labelled technical diagrams', 'make tool-use tables', 'revise units and symbols', 'write safety procedures in order'],
    mistakes: ['missing safety precautions', 'labelling diagrams vaguely', 'confusing tools with operations', 'forgetting measurement units'],
    examTips: ['Draw neat labelled engineering diagrams', 'Write safety points clearly', 'Revise tool and material definitions', 'Show calculation steps for measurement problems'],
    linkedSubjects: ['Physics', 'Mathematics', 'Computer Applications'],
    linkBenefit: 'connect technical diagrams, measurements, physical principles, and practical applications',
  },
];

const fallbackProfile: SubjectProfile = {
  match: /.*/,
  overview: 'This textbook is a specialised Tamil Nadu school resource for the named subject. It should be studied through its own chapter aims, definitions, examples, exercises, activities, diagrams where present, and textbook questions.',
  syllabus: 'The syllabus should be read chapter by chapter, with attention to the subject vocabulary, core ideas, textbook examples, activity questions, short answers, and long-answer preparation.',
  mastery: 'Students master this subject when they can explain the chapter ideas in their own words, use correct terms, answer textbook exercises, and revise the important points without depending only on memorised guide material.',
  study: 'Read the lesson slowly, prepare chapter notes, mark important definitions, and rewrite difficult answers after teacher correction.',
  revision: 'For 2026-2027, revision should include chapter summaries, important terms, textbook exercises, and repeated written practice.',
  mediumTamil: 'Tamil Medium students should use the textbook terminology carefully and maintain neat answer presentation.',
  mediumEnglish: 'English Medium students should use precise subject vocabulary and complete sentence answers.',
  termNotes: [
    'Term 1 should build the foundation of the subject.',
    'Term 2 should improve application and answer writing.',
    'Term 3 should consolidate revision and exam readiness.',
  ],
  fullYearNote: 'For a full-year book, divide chapters into monthly study and revision targets.',
  stageNotes: [
    'At the primary level, the subject should be learnt through simple examples.',
    'At the upper-primary level, students should connect definitions with activities.',
    'At the high-school level, answer structure and revision become important.',
    'At the Higher Secondary level, deeper subject vocabulary and organised writing are required.',
  ],
  routines: ['prepare chapter summaries', 'revise keywords', 'answer textbook questions', 'rewrite corrected answers'],
  mistakes: ['ignoring textbook exercises', 'using vague terms', 'leaving revision too late', 'copying without understanding'],
  examTips: ['Use correct textbook terms', 'Write answers in clear points', 'Revise chapter-end exercises', 'Keep presentation neat'],
  linkedSubjects: ['English', 'Mathematics', 'Science'],
  linkBenefit: 'continue connected revision across the class textbook set',
};

function getProfile(subject: string) {
  return profiles.find((profile) => profile.match.test(subject)) ?? fallbackProfile;
}

function hash(value: string) {
  return value.split('').reduce((total, char) => total + char.charCodeAt(0), 0);
}

function pick(items: string[], seed: number, offset = 0) {
  return items[(seed + offset) % items.length];
}

function stageIndex(classId: number) {
  if (classId <= 2) return 0;
  if (classId <= 7) return 1;
  if (classId <= 10) return 2;
  return 3;
}

function termNote(profile: SubjectProfile, book: Book) {
  if (book.term) return profile.termNotes[book.term - 1];
  return profile.fullYearNote;
}

function mediumNote(profile: SubjectProfile, book: Book) {
  return book.medium === 'Tamil Medium' ? profile.mediumTamil : profile.mediumEnglish;
}

function bookName(cls: ClassInfo, book: Book) {
  return `Class ${cls.id} ${book.subject} ${book.medium}${book.term ? ` Term ${book.term}` : ''}`;
}

function findInternalLinks(cls: ClassInfo, book: Book, profile: SubjectProfile) {
  const candidates = cls.books.filter((candidate) => candidate.id !== book.id);
  const preferred = profile.linkedSubjects
    .map((subject) =>
      candidates.find(
        (candidate) =>
          candidate.medium === book.medium &&
          candidate.subject.toLowerCase().includes(subject.toLowerCase())
      ) ?? candidates.find((candidate) => candidate.subject.toLowerCase().includes(subject.toLowerCase()))
    )
    .filter((candidate): candidate is Book => Boolean(candidate));
  const fallback = candidates.filter((candidate) => candidate.medium === book.medium).slice(0, 2);
  const unique = [...preferred, ...fallback].filter(
    (candidate, index, list) => list.findIndex((item) => item.id === candidate.id) === index
  );

  return unique.slice(0, 2).map((candidate) => ({
    label: `Class ${cls.id} ${candidate.subject} details`,
    href: `/class/${cls.id}/book/${candidate.id}`,
  }));
}

export function buildBookDetailArticle(cls: ClassInfo, book: Book): BookDetailArticle {
  const profile = getProfile(book.subject);
  const seed = hash(book.id);
  const name = bookName(cls, book);
  const stage = profile.stageNotes[stageIndex(cls.id)];
  const term = termNote(profile, book);
  const medium = mediumNote(profile, book);
  const firstRoutine = pick(profile.routines, seed);
  const secondRoutine = pick(profile.routines, seed, 1);
  const firstMistake = pick(profile.mistakes, seed);
  const secondMistake = pick(profile.mistakes, seed, 1);
  const links = findInternalLinks(cls, book, profile);

  return {
    bookName: name,
    intro: [
      `${name} is a focused Tamil Nadu school textbook for the 2026-2027 academic year. ${profile.overview} ${stage} ${term}`,
      `${medium} The best way to use this PDF is to keep the textbook open during classroom revision, mark the exact chapter language, and practise the kind of work this subject demands. For ${book.subject}, that means students should ${firstRoutine}, ${secondRoutine}, and check whether every answer uses the correct subject vocabulary rather than loose general wording.`,
    ],
    syllabusHighlights: [
      `${profile.syllabus} This ${book.term ? `Term ${book.term}` : 'full-year'} book should therefore be read as a subject map: each chapter has its own vocabulary, question pattern, and revision method. Students should identify the lesson title, key ideas, textbook examples, activity-based questions, and likely short-answer points before moving to guide material.`,
      `${profile.mastery} In Class ${cls.id}, the syllabus should not be reduced to memorised answers. Students should notice how the textbook builds the subject step by step, how examples are presented, and how chapter-end questions ask for explanation, comparison, labelling, calculation, interpretation, procedure, or writing practice according to the nature of ${book.subject}.`,
    ],
    studyGuidance: [
      `${profile.study} A practical 2026-2027 study plan for ${book.subject} should include reading, written practice, correction, and revision in the same week. Students should pay special attention to ${firstMistake} and ${secondMistake}, because these are the kinds of small errors that reduce marks even when the chapter has been read.`,
      `${profile.revision} After each chapter, students should prepare a compact revision page with the main terms, important questions, and one corrected answer. The ${book.medium} version should be practised in that same medium so that exam answers sound natural, accurate, and close to the textbook style.`,
    ],
    examTips: [
      ...profile.examTips.map((tip) => `${tip} in ${book.subject}.`),
      `Revise the official textbook exercises from this ${book.term ? `Term ${book.term}` : 'full-year'} PDF before guide questions, because the exam usually rewards textbook-based wording, correct presentation, and subject-specific keywords.`,
    ],
    internalLinks: links,
    internalLinkLead: `After finishing this ${book.subject} book, continue with`,
    internalLinkTail: `to ${profile.linkBenefit}.`,
  };
}
