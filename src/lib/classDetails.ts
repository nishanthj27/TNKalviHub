import type { ClassInfo } from '@/data/books';

export type ClassDetailContent = {
  title: string;
  intro: string[];
  highlights: string[];
  guidance: string[];
  deepDive: string[];
};

const classContent: Record<number, ClassDetailContent> = {
  1: {
    title: 'Tamil Nadu Class 1 Textbooks Guide for 2026-2027',
    intro: [
      'Class 1 is the first formal step into school learning, so the textbooks for this level are designed to feel friendly, visual, and activity-based. Tamil Nadu Class 1 books introduce children to letters, sounds, numbers, simple English words, basic Tamil reading, early Mathematics, and Environmental Studies through pictures, oral practice, rhymes, stories, drawing, matching, and classroom conversation. The Term 1, Term 2, and Term 3 structure is important because young learners need short learning cycles. Instead of one heavy full-year book, the lessons are divided into smaller parts so children can gradually build confidence.',
      'At this stage, the goal is not speed. A Class 1 child should learn to listen carefully, recognise letters, speak simple sentences, count objects, identify shapes, name family members, notice plants and animals, and form neat writing habits. Tamil Medium and English Medium books both support the same age-level foundation, but the language exposure changes according to the medium selected by the parent or school.',
    ],
    highlights: [
      'Tamil and English books at Class 1 focus strongly on sound recognition, picture reading, tracing, recitation, and simple word formation. Mathematics introduces counting, comparison, shapes, patterns, addition readiness, subtraction readiness, and everyday number use. Environmental Studies connects learning with home, school, food, water, animals, plants, safety, and cleanliness. Each subject is built around things the child can see and touch, which makes the PDF useful not only for reading but also for home practice.',
      'Parents should treat the textbook pages as conversation starters. A picture of a fruit can become a naming activity. A number exercise can be practised with pencils, toys, or grains. A Tamil letter can be traced in a notebook before writing it independently. A short English rhyme can be repeated daily until pronunciation becomes natural.',
    ],
    guidance: [
      'For the 2026-2027 academic year, Class 1 students should follow a light but regular study routine. Ten to fifteen minutes per subject is enough when the child is attentive. Reading aloud, tracing letters, counting real objects, colouring within lines, and answering oral questions are more valuable than long written homework. Children should revise Term 1 before moving deeply into Term 2, and Term 2 before starting Term 3 revision, because early gaps in letters or numbers can make later lessons harder.',
      'Exam preparation for Class 1 should be gentle. Parents can ask children to identify pictures, read simple words, match objects, count items, complete missing letters, say rhymes, and answer simple EVS questions. The downloaded PDFs are useful for repeated practice, but the child should not be forced to memorise without understanding. A calm routine, neat notebooks, and cheerful revision will help Class 1 students enjoy school and build a strong base for the next class.',
    ],
  },
  2: {
    title: 'Tamil Nadu Class 2 Textbooks Guide for 2026-2027',
    intro: [
      'Class 2 is the stage where children move from basic recognition to more independent reading, writing, counting, and observation. Tamil Nadu Class 2 textbooks are still colourful and activity-based, but they expect students to read slightly longer lines, write words and short sentences, solve small Mathematics problems, and explain simple Environmental Studies ideas. The Term 1, Term 2, and Term 3 books help children revise often instead of carrying the whole year’s learning at once.',
      'The Class 2 books in Tamil Medium and English Medium support stronger language habits. Tamil lessons improve word reading, sentence formation, poem recitation, and simple grammar awareness. English lessons build vocabulary, phonics, rhymes, short stories, and everyday expression. Mathematics becomes more structured with numbers, place value, addition, subtraction, measurement, shapes, and simple data ideas. EVS continues to connect school learning with family, neighbourhood, plants, animals, health, and safety.',
    ],
    highlights: [
      'A Class 2 student should learn to read textbook lines with less help than in Class 1. The syllabus encourages children to observe details, answer in short sentences, recognise number patterns, and understand basic life around them. The textbook activities are important because they train attention: matching, filling blanks, circling correct answers, drawing, counting, comparing, and saying answers aloud.',
      'The subject mix is carefully balanced. Language books improve expression. Mathematics improves order and accuracy. Environmental Studies develops awareness of surroundings. When parents download the PDFs, they can use them for daily reading practice, weekend revision, and catching up after school absence. Each term book should be completed slowly with repeated revision of earlier pages.',
    ],
    guidance: [
      'For 2026-2027, Class 2 children should practise reading every day. A useful routine is one Tamil reading page, one English vocabulary or rhyme activity, ten Mathematics sums or counting tasks, and a short EVS oral revision. Written work should be neat and age-appropriate. Children should be encouraged to say what they understood, not only copy answers from the book.',
      'Exam preparation should include spelling practice, simple sentence writing, number exercises, shape identification, EVS picture questions, and oral recall. The Term 3 period is especially useful for revising the full year’s basic skills. Parents should watch for common gaps such as reversed letters, weak number order, difficulty reading small words, and incomplete sentence answers. With regular PDF revision and classroom follow-up, Class 2 becomes a strong bridge from early learning to upper primary preparation.',
    ],
  },
  3: {
    title: 'Tamil Nadu Class 3 Textbooks Guide for 2026-2027',
    intro: [
      'Class 3 is an important transition because students begin handling a wider subject set. Tamil Nadu Class 3 textbooks include Tamil, English, Mathematics, Science, and Social Science in term-wise format. This means children are no longer studying only basic language, numbers, and environment. They begin learning early science concepts, social life, places, history-like stories, maps, and more organised Mathematics.',
      'The Class 3 Tamil Medium and English Medium books expect students to read paragraphs, understand lesson meaning, write short answers, solve exercises, draw simple diagrams, and remember key terms. Term 1 introduces the foundation, Term 2 expands the concepts, and Term 3 consolidates learning before the next class. The downloaded PDFs are useful for parents because Class 3 students often need repeated reading at home to become confident.',
    ],
    highlights: [
      'Tamil and English lessons build stronger reading fluency, grammar awareness, poem recitation, vocabulary, and writing. Mathematics includes larger numbers, operations, measurement, time, money, patterns, and geometry basics. Science introduces plants, animals, the human body, materials, water, air, and simple experiments. Social Science introduces family, community, local places, safety, maps, leaders, resources, and social habits.',
      'This is the class where students should begin maintaining separate notebooks for subjects. A Science diagram should not be mixed with a Tamil poem note. A Maths mistake should be corrected clearly. A Social Science answer should use the right place or community word. These habits make later classes easier.',
    ],
    guidance: [
      'For the 2026-2027 academic year, Class 3 students should follow a weekly rhythm. Read language lessons aloud, practise Mathematics sums daily, draw Science pictures with labels, and revise Social Science terms through oral questions. Children should learn how to find answers from the textbook paragraph rather than depending only on memorised guide answers.',
      'Exam preparation should include chapter reading, spelling, short answers, simple diagrams, tables, and textbook exercises. In Mathematics, students should show steps. In Science, they should label diagrams. In Social Science, they should remember names, places, and basic definitions. The term-wise PDFs help students revise in smaller portions, which is ideal for Class 3 learning.',
    ],
  },
  4: {
    title: 'Tamil Nadu Class 4 Textbooks Guide for 2026-2027',
    intro: [
      'Class 4 strengthens the foundation created in Class 3 and asks students to become more independent. Tamil Nadu Class 4 textbooks continue with Tamil, English, Mathematics, Science, and Social Science across Term 1, Term 2, and Term 3. The lessons are longer, the exercises need more thinking, and students begin writing more complete answers.',
      'At this level, children should move beyond only reading the page. They need to understand chapter headings, identify important points, solve problems in order, observe diagrams, and write answers neatly. Tamil Medium and English Medium books follow the same class standard while giving students language-appropriate explanations and exercises.',
    ],
    highlights: [
      'Tamil lessons improve prose reading, poetry understanding, grammar, and composition. English lessons focus on stories, poems, vocabulary, grammar, and functional writing. Mathematics includes multiplication, division, fractions, measurement, geometry, time, money, and word problems. Science covers living things, food, health, materials, force, water, air, and environmental care. Social Science helps students understand land, people, community, government basics, resources, and maps.',
      'Class 4 is a good time to teach study discipline. Students can underline keywords, write small summaries, correct wrong sums, revise diagrams, and ask questions when they do not understand. Downloaded PDFs are especially useful for repeating diagrams, reading lessons before class, and revising missed portions.',
    ],
    guidance: [
      'For 2026-2027, Class 4 students should study with a notebook beside the PDF. After reading a lesson, they can write five important words, two short questions, and one thing they found difficult. Mathematics should be practised every day because multiplication, division, and fractions become important for later classes.',
      'Before exams, students should revise term-wise. Language preparation should include reading, meanings, grammar, and writing formats. Science preparation should include diagrams, definitions, and examples. Social Science preparation should include maps, names, and short notes. With steady practice, Class 4 students become ready for the stronger upper-primary workload of Class 5.',
    ],
  },
  5: {
    title: 'Tamil Nadu Class 5 Textbooks Guide for 2026-2027',
    intro: [
      'Class 5 is the final year of primary school and works as a bridge to middle school. Tamil Nadu Class 5 textbooks are more detailed than the earlier primary books, while still keeping lessons accessible for children. The term-wise structure helps students complete Tamil, English, Mathematics, Science, and Social Science in manageable portions.',
      'By Class 5, students should be able to read independently, write clear answers, solve multi-step sums, understand diagrams, and revise textbook exercises. Tamil Medium and English Medium PDFs are useful for classroom preparation, home study, exam revision, and regular reading practice throughout the 2026-2027 academic year.',
    ],
    highlights: [
      'Tamil and English books improve grammar, reading comprehension, poems, stories, vocabulary, and writing. Mathematics includes larger numbers, fractions, decimals, measurement, geometry, factors, multiples, and word problems. Science introduces deeper ideas about plants, animals, body systems, materials, energy, environment, and simple experiments. Social Science includes history, geography, civics, community, resources, maps, and citizenship basics.',
      'Class 5 students should start learning how to study chapter by chapter. They should identify definitions, examples, exercise types, diagrams, and likely questions. This does not mean heavy memorisation. It means knowing what each subject expects: Maths needs practice, Science needs diagrams and explanations, Social Science needs names and concepts, and language subjects need reading and writing.',
    ],
    guidance: [
      'For 2026-2027, Class 5 students should maintain a revision timetable. A balanced week can include daily Maths practice, alternate-day reading in Tamil and English, two Science diagram sessions, and Social Science oral revision. Parents can use the PDFs to check whether the child has completed every textbook exercise.',
      'Exam tips for Class 5 include writing answers in complete sentences, showing Mathematics steps, labelling Science diagrams, revising map and community terms in Social Science, and practising grammar examples. Since Class 6 will introduce a more serious middle-school pattern, Class 5 should be used to build neat work, confidence, and independent study habits.',
    ],
  },
  6: {
    title: 'Tamil Nadu Class 6 Textbooks Guide for 2026-2027',
    intro: [
      'Class 6 is the beginning of middle school, and the Tamil Nadu Class 6 textbooks reflect that change. Students continue to use term-wise books, but the lessons become more structured, subject vocabulary increases, and answer writing becomes more important. Tamil, English, Mathematics, Science, and Social Science now require regular reading and revision rather than only classroom listening.',
      'The Class 6 PDFs are useful because students often need to revisit chapters after school. Tamil Medium and English Medium books help learners study in their chosen medium while building the same academic foundation. Term 1, Term 2, and Term 3 should be treated as connected parts of the year, not separate books to forget after each test.',
    ],
    highlights: [
      'Tamil and English focus on comprehension, grammar, poems, prose, supplementary reading, and writing. Mathematics introduces stronger work in numbers, integers, fractions, decimals, geometry, basic algebra, data handling, and measurement. Science includes food, materials, separation, plants, body movement, electricity, light, water, air, and environment. Social Science becomes broader with History, Geography, and Civics elements.',
      'Class 6 students should begin using headings and subheadings while studying. A Social Science chapter may need timeline notes. A Science chapter may need diagrams and activities. A Maths chapter may need formulas and repeated sums. A language chapter may need meanings, grammar, and paragraph practice.',
    ],
    guidance: [
      'For 2026-2027, students should study Class 6 with a weekly subject plan. Mathematics should be practised almost daily. Science should be revised through definitions, diagrams, and activities. Social Science should be revised with maps, dates, and terms. Tamil and English should include reading aloud, vocabulary, grammar, and writing practice.',
      'Exam preparation should begin at least two weeks before each term test. Students should complete textbook exercises first, then revise class notes. Common mistakes include skipping Maths steps, drawing Science diagrams without labels, writing Social Science answers too generally, and ignoring grammar examples. The PDFs help students correct these gaps before exams.',
    ],
  },
  7: {
    title: 'Tamil Nadu Class 7 Textbooks Guide for 2026-2027',
    intro: [
      'Class 7 is the final term-wise middle-school year before the full-year textbook format begins from Class 8. Tamil Nadu Class 7 textbooks are therefore important for strengthening subject discipline. Students study Tamil, English, Mathematics, Science, and Social Science through Term 1, Term 2, and Term 3 books, with more detailed chapters and more serious exercises.',
      'At this level, students should become comfortable with independent reading, structured notes, regular problem solving, diagram practice, and longer answers. Tamil Medium and English Medium PDFs allow students to revise lessons exactly as given in their school medium, which is important for textbook-based exams.',
    ],
    highlights: [
      'Mathematics in Class 7 includes integers, fractions, decimals, algebraic expressions, equations, geometry, lines, angles, triangles, symmetry, mensuration, and data handling. Science covers nutrition, heat, acids and bases, physical and chemical changes, weather, respiration, transportation, reproduction in plants, motion, light, water, forests, and waste management. Social Science expands History, Geography, and Civics with more detailed terms and explanation-based questions.',
      'Language subjects also become more mature. Tamil requires prose understanding, poem meaning, grammar, and writing practice. English requires comprehension, vocabulary, grammar, poem appreciation, and composition. Students who develop strong reading habits in Class 7 usually adjust better to Class 8.',
    ],
    guidance: [
      'For 2026-2027, Class 7 students should prepare subject-wise revision notebooks. Maths needs formulas and solved examples. Science needs diagrams, definitions, and activity conclusions. Social Science needs map work, dates, civic terms, and short notes. Tamil and English need word meanings, grammar examples, and writing formats.',
      'Exam preparation should focus on term completion and revision of earlier weak areas. Since Class 8 will not follow the same term-book pattern, Class 7 is the right time to improve study stamina. Students should learn to read a full chapter, identify important points, answer textbook questions, and correct mistakes without waiting for the teacher to repeat every lesson.',
    ],
  },
  8: {
    title: 'Tamil Nadu Class 8 Textbooks Guide for 2026-2027',
    intro: [
      'Class 8 begins a full-year textbook pattern and marks a clear academic jump from the term-wise primary and middle classes. Tamil Nadu Class 8 textbooks expect students to handle larger chapters, deeper explanations, and more continuous revision across the year. Tamil, English, Mathematics, Science, and Social Science become stronger preparation for high school.',
      'The Class 8 PDFs are valuable for students who need steady access to the official textbook. Since there are no separate Term 1, Term 2, and Term 3 books in the same way as Classes 1 to 7, students should divide the full-year book into monthly portions. This prevents last-minute pressure and helps each subject receive enough attention.',
    ],
    highlights: [
      'Mathematics includes rational numbers, exponents, algebraic expressions, factorisation, equations, geometry, quadrilaterals, mensuration, graphs, and data handling. Science includes crop production, microorganisms, materials, force, pressure, friction, sound, light, electricity, reproduction, adolescence, pollution, and conservation. Social Science covers History, Geography, Civics, resources, government, society, and maps at a more advanced level.',
      'Tamil and English textbooks continue to build language strength through prose, poetry, grammar, comprehension, and writing. Class 8 students should start preparing answers with better structure. One-line answers are no longer enough for many questions, and students must learn to explain points clearly.',
    ],
    guidance: [
      'For 2026-2027, Class 8 students should create a monthly study calendar. Mathematics should be practised daily with extra attention to algebra and geometry. Science should be revised through diagrams, definitions, examples, and activities. Social Science should include map practice and timeline notes. Tamil and English should include reading, grammar, meanings, and composition.',
      'Exam preparation should include textbook exercises, class notes, and self-testing. Students should mark difficult chapters early because Class 8 concepts often become the base for Class 9 and Class 10. Downloaded PDFs are useful for repeated reading, printing selected pages, and revising during holidays or exam time.',
    ],
  },
  9: {
    title: 'Tamil Nadu Class 9 Textbooks Guide for 2026-2027',
    intro: [
      'Class 9 is the serious foundation year for SSLC preparation. Tamil Nadu Class 9 textbooks introduce students to the depth and pace they will need in Class 10. The subjects are no longer just basic school lessons; they become structured academic preparation in Tamil, English, Mathematics, Science, and Social Science.',
      'The Class 9 PDFs should be used throughout the year because the chapters are detailed and many concepts continue into Class 10. Tamil Medium and English Medium books follow the same syllabus standard, so students must study in the medium used for classroom teaching and exam writing.',
    ],
    highlights: [
      'Mathematics includes sets, real numbers, algebra, coordinate geometry, geometry, mensuration, statistics, and probability foundations. Science includes Physics, Chemistry, and Biology concepts such as motion, force, matter, atoms, tissues, diversity, health, environment, and natural resources. Social Science includes History, Geography, Civics, and Economics with stronger attention to dates, maps, government terms, resources, and economic ideas.',
      'Tamil and English become more exam-oriented too. Students must understand prose themes, poem meanings, grammar, supplementary reading, and writing formats. Class 9 is the time to fix weak reading habits, poor handwriting, incomplete answers, and careless calculation methods before entering the public-exam year.',
    ],
    guidance: [
      'For 2026-2027, Class 9 students should maintain subject notebooks like board-exam preparation books. Mathematics needs daily practice and correction of wrong sums. Science needs diagrams, definitions, formulas, equations, and concept maps. Social Science needs timelines, map marking, and point-wise answers. Languages need regular reading and writing.',
      'Exam preparation should not be postponed. After each chapter, students should complete textbook exercises, revise teacher notes, and prepare a one-page summary. The official PDFs help students return to exact textbook wording whenever they are unsure. A strong Class 9 year makes Class 10 much easier and reduces board-exam fear.',
    ],
  },
  10: {
    title: 'Tamil Nadu Class 10 Textbooks Guide for SSLC 2026-2027',
    intro: [
      'Class 10 is the SSLC public-exam year, so the Tamil Nadu Class 10 textbooks are among the most important resources for school students. Every subject must be studied carefully because board-exam questions are strongly connected to textbook concepts, examples, exercises, diagrams, grammar, map work, and answer presentation.',
      'Tamil Medium and English Medium PDFs help students revise from the official source without depending only on guidebooks. Class 10 students should treat the textbooks as the main study material for Tamil, English, Mathematics, Science, and Social Science. The full-year format means students must plan the syllabus early and revise repeatedly.',
    ],
    highlights: [
      'Mathematics includes algebra, matrices or related structures according to syllabus, coordinate geometry, geometry, trigonometry, mensuration, statistics, and probability. Science combines Physics, Chemistry, and Biology, including laws, formulas, reactions, diagrams, life processes, electricity, optics, and environmental concepts. Social Science includes History, Geography, Civics, Economics, map marking, dates, government, resources, and development topics.',
      'Tamil and English are scoring subjects when students prepare consistently. Poem meanings, prose summaries, grammar, supplementary reading, letter writing, paragraph writing, and comprehension should be revised from the textbook. Class 10 students should avoid studying only expected questions. They need full textbook familiarity.',
    ],
    guidance: [
      'For SSLC 2026-2027, students should prepare a revision timetable from the beginning of the year. Mathematics requires daily problem solving. Science requires formulas, equations, definitions, diagrams, and activity-based understanding. Social Science requires map practice, timelines, civics definitions, and economics examples. Languages require reading, grammar drills, and writing practice.',
      'Exam tips for Class 10 include writing neat answers, managing time, showing calculation steps, labelling diagrams, marking maps accurately, and revising textbook exercises before model papers. The PDFs on this page are useful for chapter-by-chapter revision, missed lessons, quick checking of exercise questions, and final exam preparation.',
    ],
  },
  11: {
    title: 'Tamil Nadu Class 11 Textbooks Guide for 2026-2027',
    intro: [
      'Class 11 is the first year of Higher Secondary education and introduces students to specialised subject groups. Tamil Nadu Class 11 textbooks are very different from lower-class books because students begin serious preparation for board exams, college courses, competitive exams, vocational pathways, and career decisions. The subject list becomes wide, including languages, Mathematics, Physics, Chemistry, Biology, Commerce, Accountancy, Economics, Computer Science, vocational subjects, and more.',
      'The Class 11 PDFs are useful because each subject has deeper theory, longer chapters, new terminology, and more independent study expectations. Students should not treat Class 11 as a relaxed year before Class 12. Many Class 12 topics depend directly on Class 11 foundations.',
    ],
    highlights: [
      'Science-group students need strong understanding of Physics concepts, Chemistry reactions, Biology diagrams, Mathematics methods, and laboratory reasoning. Commerce-group students need clear basics in Accountancy, Commerce, Economics, Business Mathematics, and related subjects. Computer Science and Computer Applications require practical coding, logic, database, and digital skills. Vocational subjects require technical terms, diagrams, procedures, and applied understanding.',
      'Languages remain important because board-exam performance depends on reading, grammar, writing, and presentation. Students in Tamil Medium and English Medium should use the textbook matching their school medium so terminology and answer style remain consistent.',
    ],
    guidance: [
      'For 2026-2027, Class 11 students should study with long-term planning. Each subject should have a separate notebook for definitions, formulas, diagrams, formats, reactions, programs, or account formats depending on the subject. Weekly revision is essential because Higher Secondary chapters are too large for last-minute study.',
      'Exam preparation should include textbook reading, solved examples, chapter exercises, teacher notes, and repeated written practice. Students aiming for Class 12 success should use Class 11 to build discipline: daily Mathematics or Accountancy practice, regular Science diagrams or derivations, consistent Commerce definitions, and steady language writing. The PDFs make it easier to revise official content whenever needed.',
    ],
  },
  12: {
    title: 'Tamil Nadu Class 12 Textbooks Guide for Board Exam 2026-2027',
    intro: [
      'Class 12 is the final Higher Secondary board-exam year and one of the most important academic stages for Tamil Nadu students. Class 12 marks influence college admission, scholarship opportunities, professional courses, vocational choices, and career direction. The Tamil Nadu Class 12 textbooks therefore need careful, repeated, and subject-specific study.',
      'This page provides Class 12 Tamil Medium and English Medium PDF links for a wide range of subjects, including languages, Mathematics, Physics, Chemistry, Botany, Zoology, Commerce, Accountancy, Economics, Computer Science, Computer Applications, Statistics, vocational subjects, and other Higher Secondary courses. Students should download only the books matching their group and medium.',
    ],
    highlights: [
      'Science students should focus on derivations, numerical problems, reactions, equations, diagrams, biological processes, definitions, and application questions. Commerce students should focus on account formats, journal entries, company accounts, business organisation, economics definitions, statistics, and case-based understanding. Computer-related subjects need programming logic, syntax, database concepts, output practice, and practical familiarity. Vocational subjects need diagrams, procedures, safety points, terminology, and real-world application.',
      'Class 12 language books also deserve steady preparation. Tamil and English can improve the total score when students practise prose, poetry, grammar, comprehension, and writing formats. Since the year is exam-focused, every subject should be revised from the official textbook before model papers and guidebooks.',
    ],
    guidance: [
      'For Board Exam 2026-2027, Class 12 students should prepare a timetable that separates daily practice subjects from reading-heavy subjects. Mathematics, Accountancy, Physics problems, Chemistry equations, Computer programs, and Statistics require repeated written practice. Biology, Commerce, Economics, History, Geography, Political Science, and vocational subjects require organised notes, diagrams, definitions, and chapter-wise revision.',
      'Exam tips for Class 12 include completing the syllabus early, revising textbook exercises, practising previous-year and model questions, writing answers in proper format, checking units and labels, and keeping presentation clean. The official PDFs are useful for final revision, verifying chapter wording, recovering missed classwork, and preparing confidently for public exams.',
    ],
  },
};

const classDeepDive: Record<number, string[]> = {
  1: [
    'A Class 1 textbook page should be handled with patience because the child is still learning how a book works. Turning pages, following a line from left to right, listening to the teacher, holding a pencil correctly, and answering when asked are all part of the learning process. When parents use the downloaded PDFs, they can sit beside the child and ask simple questions such as “What do you see?”, “How many are there?”, “What sound does this letter make?”, and “Can you say this word again?” These small interactions help the child connect school lessons with home language and daily objects.',
    'The most useful Class 1 revision is playful revision. Tamil letters can be practised with sand, slate, notebook, or finger tracing. English words can be repeated through songs and picture cards. Mathematics can be practised by counting spoons, flowers, pencils, or steps. Environmental Studies can be revised by naming family members, food items, animals, plants, and classroom objects. If the child becomes tired, the session should stop. A happy Class 1 learner remembers more than a pressured learner, and the textbook should support curiosity rather than fear.',
    'Teachers and parents should also watch the child’s comfort with routine. Bringing books, recognising the correct subject, listening during reading time, and finishing small tasks are achievements in Class 1. The PDFs can support this routine by allowing the same page to be revised at home, so the child sees familiar lessons again and gains confidence through repetition.',
  ],
  2: [
    'Class 2 is also the year when handwriting, spelling, and number alignment begin to matter more. Children should be guided to leave space between words, write numbers in the correct place, and complete small answers neatly. Parents can use the PDFs to compare the textbook model with the child’s notebook work. If a child reads a lesson fluently but cannot write the answer, the next step should be oral explanation followed by one or two guided sentences. This gradual movement from speaking to writing is very important for Class 2.',
    'The term-wise books should be revised in a spiral method. Before starting a new Tamil or English lesson, revise two old words. Before solving new Mathematics sums, revise counting and place value. Before a new EVS chapter, ask the child to recall one real example from the previous lesson. This kind of revision prevents forgetting and keeps learning light. Class 2 students do not need heavy exam pressure; they need repeated exposure, confidence, correction, and appreciation when they try sincerely.',
    'Class 2 learning should also include spoken confidence. Children can be asked to read one line, explain one picture, count one group of objects, and say one answer in their own words. These small oral activities prepare them for written work. The downloaded books make it easier to repeat the same activity without waiting for the school notebook.',
  ],
  3: [
    'Class 3 students begin to show clear strengths and weaknesses. Some children read well but struggle with Mathematics. Some solve sums quickly but write language answers too briefly. Some enjoy Science pictures but forget Social Science terms. The downloaded textbooks help parents and teachers identify these patterns early. When a child makes a mistake, the correction should point to the exact textbook idea: the number step, the diagram label, the spelling, the definition, or the sentence structure. This makes correction useful instead of discouraging.',
    'Since Class 3 includes Science and Social Science as separate learning areas, students should learn how different subjects ask different kinds of questions. Science may ask “why” or “how”. Social Science may ask “where”, “who”, or “what is the use”. Mathematics asks for steps. Tamil and English ask for meaning and expression. Understanding this difference is a major academic skill for Class 3. The PDFs can be used to revisit each subject style during weekly revision.',
    'Parents can support Class 3 by asking the student to explain the lesson before writing answers. If the child can say the idea clearly, the written answer becomes stronger. A weekly review of completed textbook pages, unfinished exercises, and corrected mistakes will keep all five subjects balanced throughout the year.',
  ],
  4: [
    'Class 4 students are old enough to take small responsibility for their own books. They can check whether the correct term PDF is being used, identify the lesson title, read instructions before answering, and mark difficult words for later. This independence should be encouraged. A useful practice is to ask the student to explain what the lesson is about before opening the question section. If the child can explain the lesson orally, written answers become easier and less dependent on memorisation.',
    'The Class 4 year also builds the foundation for stronger reading comprehension. Students should learn to find answers inside a paragraph, not guess from memory alone. In Mathematics, they should learn why a method works. In Science, they should connect diagrams with the written explanation. In Social Science, they should connect people, places, and resources with real examples. These habits make the textbook PDFs more than download files; they become working study companions.',
    'Class 4 is also a good stage to improve answer length. Students should learn when one word is enough, when a full sentence is needed, and when two or three points should be written. This judgement grows through textbook exercises. The PDF pages can be used for repeated practice, especially for children who need extra time after school.',
  ],
  5: [
    'Class 5 students are preparing to leave the primary stage, so the year should be used to strengthen confidence and reduce dependency. Students should be able to open the PDF, locate a chapter, read the headings, complete exercises, and ask specific doubts. Instead of saying “I do not understand the lesson,” they should learn to say “I do not understand this word,” “I made a mistake in this sum,” or “I cannot label this diagram.” Specific doubts lead to faster improvement.',
    'This class is also a good time to introduce short self-tests. After completing a chapter, the student can close the book and write five words, three questions, two examples, and one doubt. For Mathematics, they can redo two solved examples. For Science, they can draw one labelled picture. For Social Science, they can write names or places. For Tamil and English, they can read a paragraph aloud and write a short summary. These habits prepare the child for middle-school expectations.',
    'Class 5 revision should also include responsibility for materials. Students can check whether they have the correct PDF, complete the right lesson, and compare their notebook with the textbook exercise. This habit makes them less dependent when they enter Class 6. By the end of Class 5, a student should know how to revise a lesson without being guided through every line.',
  ],
  6: [
    'Class 6 students often feel a jump in workload because the chapters become longer and the subject language becomes more formal. The best response is not to study for many hours suddenly, but to study more systematically. Students should learn to split a chapter into smaller sections: reading, meanings, examples, diagrams, exercises, and revision questions. When the PDF is used this way, even a long chapter becomes manageable. This method is especially helpful for Science and Social Science.',
    'Middle-school success depends on regular correction. A wrong Mathematics step should be rewritten. A Science definition should be improved with the correct keyword. A Social Science answer should be changed from a vague sentence into a point-wise answer. Tamil and English grammar mistakes should be collected in a separate page. Class 6 students who learn from mistakes early will handle Class 7 and Class 8 with much less stress.',
    'Class 6 students should also learn to manage time across subjects. Since all subjects now demand more reading, students should avoid studying only the easiest book. A simple timetable using the downloaded PDFs can rotate language reading, Maths practice, Science diagrams, and Social Science revision. Balanced attention prevents one subject from becoming a serious weakness.',
  ],
  7: [
    'Class 7 is the right time to build exam discipline without creating exam fear. Students should learn to read the question carefully, decide how many points are needed, and answer according to marks. A one-mark answer should be direct. A three-mark answer should have clear points. A diagram question should have labels. A Mathematics problem should show steps. These habits are easier to develop in Class 7 than to learn suddenly in Class 10.',
    'The term PDFs also help students revise older portions before they disappear from memory. A strong Class 7 student does not simply finish Term 1 and forget it. They keep useful formulas, grammar rules, Science definitions, Social Science map points, and language writing formats for later revision. By the end of the year, the student should know how to prepare a chapter summary, how to correct a weak answer, and how to revise without waiting for last-minute pressure.',
    'Class 7 is also the stage where students should begin comparing chapters. A Science process may resemble an earlier activity. A Social Science map may connect with a previous geography idea. A language grammar rule may repeat in many lessons. By noticing these links inside the textbooks, students develop stronger memory and better exam confidence.',
  ],
  8: [
    'Class 8 students should treat the full-year textbook as a long-term project. Since the lessons are no longer split into three small term books, planning becomes more important. Students can divide each subject into monthly targets and keep a checklist for completed chapters. The PDF can be used to preview the next lesson before class and review the same lesson after class. This preview-review habit improves understanding and reduces the need for memorising at the end.',
    'This class also introduces stronger analytical habits. In Mathematics, students should compare methods and understand why a formula applies. In Science, they should connect experiments with conclusions. In Social Science, they should connect maps, resources, government, and historical events. In languages, they should write more complete answers. Class 8 is not a public-exam year, but it quietly builds many of the skills required for Class 9 and Class 10.',
    'Students should also begin practising longer revision sessions in Class 8. A full-year textbook requires stamina, especially before exams. Instead of reading many pages without output, students can study one section and immediately write a summary, solve a problem, draw a diagram, or answer a textbook question. This makes revision active and measurable.',
  ],
  9: [
    'Class 9 should be treated as the training year for SSLC. Students who postpone serious study until Class 10 often struggle because Class 9 concepts are the foundation for board-exam subjects. Algebra, geometry, scientific laws, chemical ideas, biological terms, map work, civics, economics, grammar, and writing practice all become more demanding from this point. The official PDFs help students return to the base whenever they forget a concept.',
    'A good Class 9 routine includes chapter reading before tuition notes, written practice after classroom teaching, and weekend revision of weak areas. Students should begin solving without looking at answers immediately. In Science, they should explain concepts instead of memorising lines. In Social Science, they should revise maps and dates throughout the year. In languages, they should practise writing because presentation and grammar become important for higher marks.',
    'Class 9 students should also begin using exam-style discipline. They can practise writing answers within time, leaving margins, numbering answers correctly, and checking whether the response matches the question. These habits may look small, but they become extremely valuable in Class 10. The textbook PDFs give students a reliable base for this practice, especially when they revise the same chapter more than once and compare their first answer with an improved answer.',
  ],
  10: [
    'Class 10 students should keep the official textbooks at the centre of SSLC preparation. Guidebooks, question banks, and model papers are useful only after the textbook has been studied properly. Many students lose marks because they practise expected questions but ignore textbook exercises, definitions, diagrams, maps, and examples. The PDFs make it easy to return to the exact lesson whenever a doubt appears during revision.',
    'The best Class 10 plan is a three-round revision system. The first round completes every chapter with textbook exercises. The second round focuses on weak chapters, diagrams, formulas, grammar, maps, and writing formats. The third round uses model papers and timed practice. Students should also correct old mistakes instead of only solving new questions. For SSLC, neat presentation, time management, and textbook accuracy are as important as memory.',
    'Students should keep separate SSLC revision materials for each subject. Mathematics needs formula and mistake pages. Science needs diagrams, equations, laws, and biological terms. Social Science needs map lists, dates, definitions, and short notes. Tamil and English need grammar, poem notes, prose summaries, and writing formats. The PDFs help verify every one of these revision pages against the official textbook before the final public-exam revision period begins.',
  ],
  11: [
    'Class 11 students often experience a major jump because subjects become specialised. A student who selected the Science group must think in terms of derivations, numerical problems, diagrams, reactions, and biological processes. A Commerce student must think in terms of accounts, business terms, economics, and financial logic. A Computer Science student must practise code, output, and logic. The PDFs help students stay close to the official syllabus during this adjustment period.',
    'This year should not be ignored just because the final board exam is in Class 12. Weak Class 11 foundations make Class 12 difficult, especially in Mathematics, Physics, Chemistry, Biology, Accountancy, Economics, and Computer Science. Students should revise every week, prepare chapter summaries, and maintain formula books, reaction notes, account-format pages, program notes, or definition lists according to their group. Class 11 is where serious Higher Secondary study habits are formed.',
    'Class 11 students should also learn to study according to their group. Science students need problem-solving and diagram routines. Commerce students need formats, definitions, and business examples. Computer students need practical coding and output checking. Arts and vocational students need structured notes and terminology. The official PDFs keep each group aligned with the actual Tamil Nadu syllabus.',
  ],
  12: [
    'Class 12 students should use the PDFs as final authority for board-exam preparation. Coaching notes and guidebooks may simplify topics, but the textbook gives the official chapter structure, terms, exercise patterns, diagrams, and expected academic language. Students should verify every important answer, formula, definition, format, reaction, diagram, or procedure with the textbook before final revision. This habit prevents small but costly errors in public exams.',
    'The Class 12 year should be planned backwards from the board exam. The first phase is syllabus completion, the second phase is chapter revision, the third phase is model-paper practice, and the final phase is correction and memory strengthening. Science students should revise derivations, diagrams, reactions, and numerical problems. Commerce students should practise formats, entries, definitions, and case-based understanding. Arts and vocational students should revise structured answers, terminology, diagrams, and procedures. Consistency matters more than last-minute intensity.',
    'Students should also protect time for final presentation practice. Many Class 12 subjects require exact formats, labelled diagrams, correct units, proper headings, and clear steps. A student who knows the answer but presents it carelessly may lose marks. Using the PDF for final checking helps confirm the wording, order, and structure expected in the official textbook.',
  ],
};

export function buildClassDetailContent(cls: ClassInfo): ClassDetailContent {
  return {
    ...classContent[cls.id],
    deepDive: classDeepDive[cls.id],
  };
}
