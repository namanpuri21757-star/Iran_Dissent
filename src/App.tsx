/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const chapters = [
  {
    id: 0,
    name: "JASON REZAIAN",
    dates: "Arrested July 22, 2014",
    title: "Tehran Bureau Chief, Washington Post",
    portraitArt: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#333"/>
        <path d="M50 20 Q70 20 70 50 Q70 80 50 80 Q30 80 30 50 Q30 20 50 20" fill="#555"/>
        <rect x="35" y="40" width="10" height="5" fill="#777" opacity="0.6"/>
        <rect x="55" y="40" width="10" height="5" fill="#777" opacity="0.6"/>
        <path d="M20 100 Q50 80 80 100" fill="#444"/>
      </svg>
    ),
    narrative: "You just had dinner with a famous American television host. You laughed. You showed him your city. You were, in his words, 'unfailingly affectionate and generous.' That was four months ago. Tonight, there is a knock at the door. You are a dual US-Iranian citizen. You are being taken in for questioning. You have done nothing wrong. You know that innocence is not a defense in Iran.",
    choices: [
      { text: "Cooperate fully and trust the process.", conscience: -10, survival: 10, id: 'cooperate' },
      { text: "Request immediate consular access.", conscience: 10, survival: -10, id: 'consular' },
      { text: "Say nothing at all until you have a lawyer.", conscience: 20, survival: -20, id: 'silence' }
    ],
    reality: "Rezaian was held for 544 days in Evin Prison. He was charged with espionage, which he and the Washington Post denied. He was never shown the evidence against him. He was used as a bargaining chip in nuclear deal negotiations and released as part of a prisoner swap on January 17, 2016. He later wrote a memoir, 'Prisoner', about his experience.",
    propaganda: "Jason Rezaian was arrested on well-founded charges of espionage and collaboration with hostile foreign governments. The Islamic Republic followed all legal procedures. His detention was lawful under the Islamic Penal Code.",
    propagandaReality: "No evidence was ever presented publicly. He was held for 544 days and released as a diplomatic bargaining chip, not because charges were resolved.",
    testimony: "Anthony Bourdain, who had filmed with Jason just months before his arrest, said afterward: 'I'm going to be careful about what I say here. Even here. Words have consequences. Not for me.' He never stopped advocating for Jason's release.",
    familyDamage: "Jason's wife, Yeganeh Salehi, was also arrested and held for 72 days. She was later released but faced immense pressure and was barred from working as a journalist in Iran for years.",
    analysis: "Rezaian's case demonstrated the regime's use of dual nationals as geopolitical leverage and the criminalization of standard journalistic practice.",
    regimeLens: {
      charge: "Cooperation with a hostile foreign government",
      statute: "Article 508 of the Islamic Penal Code",
      interpretation: "Journalism for Western outlets is treated as a form of intelligence gathering for foreign powers."
    },
    intlPressure: 45,
    intlPressureTooltip: "Rezaian's case received sustained Washington Post advocacy and direct US government pressure. His dual citizenship and prominent employer made him impossible to ignore in Western capitals — a protection most Iranian dissidents do not have."
  },
  {
    id: 1,
    name: "SATTAR BEHESHTI",
    dates: "1977 – 2012",
    title: "Blogger & Labor Activist",
    portraitArt: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#333"/>
        <path d="M50 20 Q70 20 70 50 Q70 80 50 80 Q30 80 30 50 Q30 20 50 20" fill="#555"/>
        <rect x="40" y="80" width="20" height="20" fill="#555"/>
        <path d="M20 100 Q50 80 80 100" fill="#444"/>
      </svg>
    ),
    narrative: "You are Sattar. Your room is small, filled with the hum of an old computer. You write because you must. Your blog, 'Magal-e-Sattar', has become a place where you speak the truths others whisper. You've criticized the IRGC's influence on the economy. Today, a friend calls, his voice trembling. 'FATA is watching you, Sattar. They know your IP. They are coming.'",
    choices: [
      { text: "Delete everything and go dark.", conscience: -10, survival: 20, id: 'dark' },
      { text: "Keep posting. The truth cannot be deleted.", conscience: 20, survival: -30, id: 'post' },
      { text: "Flee to a relative's home outside Tehran.", conscience: 0, survival: 10, id: 'flee' }
    ],
    reality: "Sattar Beheshti chose to keep posting. He was arrested by the Cyber Police (FATA) on October 30, 2012. He was taken to Evin Prison, then to a FATA detention center. On November 3, he was dead. Fellow prisoners reported hearing his screams during interrogation. His mother, Gohar Eshghi, became a symbol of resistance, carrying his portrait to every protest.",
    propaganda: "Sattar Beheshti died of a pre-existing cardiac condition while in custody. His death was a tragic natural event. The officers present followed all proper protocols. Any allegations of mistreatment are baseless and politically motivated.",
    propagandaReality: "An Iranian parliamentary investigation confirmed he died from torture. Three officers received sentences later quietly reduced to probation.",
    testimony: "\"I want to say that I am not afraid of their threats... I will continue my work until my last breath.\" — Sattar's final blog post, written just before his arrest.",
    familyDamage: "Beheshti's family received his body; the officers responsible received minimal sentences after rare parliamentary outrage. His mother, Gohar Eshghi, has been repeatedly harassed and arrested for seeking justice for her son.",
    analysis: "Beheshti's death highlighted the extreme brutality of Iran's Cyber Police and the risks faced by citizen journalists in the digital age.",
    regimeLens: {
      charge: "Insulting government officials via online platforms",
      statute: "Cybercrime Law Article 16",
      interpretation: "Any online speech deemed critical of the state is classified as a criminal insult against the sanctity of the Islamic Republic."
    },
    intlPressure: 10,
    intlPressureTooltip: "Beheshti's death caused rare parliamentary outrage inside Iran but received almost no sustained Western media coverage. No foreign government issued a formal statement. The officers responsible faced minimal consequences."
  },
  {
    id: 2,
    name: "TEHRAN, JUNE 20, 2009",
    dates: "The Green Movement",
    title: "Neda Agha-Soltan / Composite",
    portraitArt: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#333"/>
        <path d="M50 25 Q75 25 75 55 Q75 85 50 85 Q25 85 25 55 Q25 25 50 25" fill="#555"/>
        <path d="M20 100 Q50 85 80 100" fill="#444"/>
        <circle cx="50" cy="50" r="40" fill="none" stroke="#2D5A27" strokeWidth="2" opacity="0.4"/>
      </svg>
    ),
    narrative: "You are 26 years old. You are not a political person. You came to watch, not to protest. Mahmoud Ahmadinejad has just been declared the winner of a disputed election. Millions have poured into the streets of Tehran. You are standing on Kargar Avenue. You can hear gunshots nearby. A young woman near you has been hit. Someone is filming. The crowd is scattering.",
    choices: [
      { text: "Stay and help her — you are visible on camera.", conscience: 20, survival: -20, id: 'help' },
      { text: "Run — you have a family depending on you.", conscience: -10, survival: 20, id: 'run' },
      { text: "Take out your own phone and film — the world needs to see this.", conscience: 30, survival: -10, id: 'film' }
    ],
    reality: "Neda Agha-Soltan, 26, was shot on June 20, 2009. The footage of her death, filmed by bystanders, became one of the most widely seen images of political violence in the internet age. Her name became the rallying cry of the Green Movement. The Iranian government denied responsibility and later claimed she was a CIA agent. She had been a music and philosophy student with no formal political affiliations.",
    propaganda: "The death of this individual was a staged provocation by CIA and Zionist operatives designed to destabilize the Islamic Republic. Foreign agents present in the crowd were responsible. The Islamic Republic mourns all innocent citizens.",
    propagandaReality: "Eyewitness footage and medical evidence showed she was shot by a Basij militiaman. Her name became a global symbol of the Green Movement.",
    testimony: "\"She was a person full of life... she just wanted freedom for everyone.\" — Caspian Makan, Neda's fiancé.",
    familyDamage: "Amini's family was pressured to stay silent, her father Amjad Amini repeatedly harassed by authorities. Neda's family was barred from holding a public funeral, and her grave has been repeatedly desecrated.",
    analysis: "The 2009 Green Movement was the direct ancestor of the 2022 Woman Life Freedom uprising. The regime's response established the playbook repeated in 2022.",
    regimeLens: {
      charge: "Retroactive delegitimization",
      statute: "N/A - Extrajudicial Killing",
      interpretation: "A documented Iranian tactic used when killing cannot be denied: claim the victim was a foreign agent or that the death was staged."
    },
    intlPressure: 65,
    intlPressureTooltip: "Neda's death went globally viral within hours — one of the first cases of political violence spread entirely through social media. World leaders condemned it. But within 18 months, the Green Movement had been crushed and Western attention had moved on entirely."
  },
  {
    id: 3,
    name: "MAHSA AMINI",
    dates: "2000 – 2022",
    title: "Student",
    portraitArt: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#333"/>
        <path d="M50 25 Q75 25 75 55 Q75 85 50 85 Q25 85 25 55 Q25 25 50 25" fill="#555"/>
        <path d="M25 40 Q50 20 75 40 L75 90 Q50 100 25 90 Z" fill="#222" opacity="0.8"/>
        <path d="M20 100 Q50 85 80 100" fill="#444"/>
      </svg>
    ),
    narrative: "You are Kiarash, Mahsa's brother. You were just walking out of the metro in Tehran when the white van pulled up. The Guidance Patrol took her. They said her hijab was 'improper.' Now you stand outside the Vozara detention center. A guard tells you she fainted during a 're-education' session. An ambulance arrives, but they won't let you near it. You see other women leaving, their eyes red with tears.",
    choices: [
      { text: "Trust the authorities and wait for news.", conscience: -10, survival: 10, id: 'trust' },
      { text: "Demand to see her immediately, causing a scene.", conscience: 10, survival: -10, id: 'demand' },
      { text: "Call a journalist and tell them what happened.", conscience: 20, survival: -20, id: 'call' }
    ],
    reality: "Mahsa (Jina) Amini never regained consciousness. She died on September 16, 2022. The state claimed she had a pre-existing heart condition; her family insisted she was healthy and had been beaten. Her death sparked the 'Woman, Life, Freedom' protests, the most significant challenge to the regime in decades.",
    propaganda: "Mahsa Amini suffered a sudden cardiac episode while receiving guidance at the Vozara detention facility. She received immediate medical attention. Security forces acted with full professionalism. Her death was a tragic medical event unrelated to her detention.",
    propagandaReality: "Eyewitnesses reported she was beaten. CT scans leaked from the hospital showed skull fractures. Her death sparked the largest uprising in Iran since 1979.",
    testimony: "\"They killed my daughter. They killed my Jina.\" — Kiarash Amini's documented account of what he witnessed outside the detention center.",
    familyDamage: "Amini's family was pressured to stay silent, her father Amjad Amini repeatedly harassed by authorities. Her cousin was later killed during the subsequent protests.",
    analysis: "The mandatory hijab is not just a dress code; it is a primary pillar of state control over the public sphere and the bodies of women.",
    regimeLens: {
      charge: "Appearing in public without proper hijab",
      statute: "Islamic Penal Code Article 638",
      interpretation: "Failure to adhere to the state-mandated Islamic dress code is a violation of public morality and a direct challenge to the religious foundation of the law."
    },
    intlPressure: 90,
    intlPressureTooltip: "The Woman Life Freedom uprising became the most globally covered Iranian protest in history. Governments issued sanctions. The UN formed an investigative mission. Iranian athletes and artists defected publicly. For a brief moment, the pressure was unlike anything since 1979."
  },
  {
    id: 4,
    name: "NASRIN SOTOUDEH",
    dates: "1963 – Present",
    title: "Human Rights Lawyer",
    portraitArt: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#333"/>
        <path d="M50 20 Q70 20 70 50 Q70 80 50 80 Q30 80 30 50 Q30 20 50 20" fill="#555"/>
        <rect x="42" y="45" width="16" height="8" fill="#777" opacity="0.5"/>
        <path d="M20 100 Q50 80 80 100" fill="#444"/>
      </svg>
    ),
    narrative: "You are Nasrin. You have spent your life in courtrooms, defending those the state wishes to disappear. A young woman, one of the 'Girls of Enghelab Street' who removed her headscarf in public, has been arrested. She has no one. Taking her case means you will be targeted next. Your children are young. Your husband worries. The judge is known for his severity.",
    choices: [
      { text: "Take the case publicly and vocally.", conscience: 30, survival: -30, id: 'public' },
      { text: "Take the case quietly, working behind the scenes.", conscience: 10, survival: -10, id: 'quiet' },
      { text: "Refer her to another lawyer to protect your family.", conscience: -20, survival: 20, id: 'refer' }
    ],
    reality: "Nasrin Sotoudeh took the cases of the hijab protesters with full public defiance. In 2019, she was sentenced to 38 years in prison and 148 lashes. Even from prison, she has staged hunger strikes to protest the treatment of political prisoners. She remains one of the world's most prominent defenders of human rights.",
    propaganda: "Nasrin Sotoudeh was convicted following a fair and transparent judicial process. Her sentence reflects the severity of her cooperation with foreign entities seeking to undermine the sovereignty of the Islamic Republic. The judiciary is independent and impartial.",
    propagandaReality: "Sotoudeh represented women arrested for peacefully removing their hijabs. International human rights organizations called her sentence one of the harshest ever given to a rights defender.",
    testimony: "\"I knew the consequences. I knew they would come for me. But if we do not stand for these women, who will?\" — Nasrin Sotoudeh on her decision to represent the hijab protesters.",
    familyDamage: "Sotoudeh's husband Reza Khandan was arrested for advocating for her release. Her daughter was also briefly detained and banned from traveling as a means of pressuring Nasrin.",
    analysis: "By targeting lawyers, the regime effectively strips dissidents of their last line of defense, turning the legal system into a tool of pure prosecution.",
    regimeLens: {
      charge: "Cooperation with foreign states against the Islamic Republic",
      statute: "Islamic Penal Code Article 508",
      interpretation: "Advocating for universal human rights standards is viewed as an act of espionage or collaboration with 'hostile' Western powers."
    },
    intlPressure: 40,
    intlPressureTooltip: "Sotoudeh's 38-year sentence was condemned by Amnesty International and Human Rights Watch, but no significant diplomatic action followed. Her case illustrated the gap between international rhetoric and actual pressure on Tehran."
  },
  {
    id: 5,
    name: "MOHAMMAD RASOULOF",
    dates: "1972 – Present",
    title: "Filmmaker",
    portraitArt: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#333"/>
        <rect x="30" y="30" width="40" height="30" fill="#555"/>
        <circle cx="40" cy="45" r="5" fill="#777"/>
        <circle cx="60" cy="45" r="5" fill="#777"/>
        <path d="M20 100 Q50 80 80 100" fill="#444"/>
      </svg>
    ),
    narrative: "You are Mohammad. Your camera is your weapon, and the state has tried to break it. Your latest film, 'The Seed of the Sacred Fig', was shot in secret. It tells the story of a judge's family during the protests. Now, Cannes has accepted it. But the summons has arrived: you must report to prison in three weeks to serve an eight-year sentence. If you go, the film dies. If you stay, you are caught.",
    choices: [
      { text: "Report to prison as ordered.", conscience: -10, survival: 10, id: 'prison' },
      { text: "Flee Iran illegally through the mountains.", conscience: 20, survival: -20, id: 'flee_mtn' },
      { text: "Publicly defy the summons and keep working.", conscience: 10, survival: -30, id: 'defy' }
    ],
    reality: "In May 2024, Mohammad Rasoulof made a harrowing journey on foot across the Iranian border. He arrived in Europe just days before his film premiered at Cannes. He stood on the red carpet holding portraits of his actors who were still trapped in Iran. The film won the Special Jury Prize, a testament to the power of exiled voices.",
    propaganda: "Mohammad Rasoulof's films constitute deliberate propaganda against the Islamic Republic produced in coordination with foreign adversaries. His sentencing was carried out in accordance with Article 500. His flight from justice confirms his guilt.",
    propagandaReality: "His film \"The Seed of the Sacred Fig\" won the Special Jury Prize at Cannes 2024 and was selected as Germany's Oscar submission. It depicts the moral collapse of a Revolutionary Court official.",
    testimony: "\"I had to choose between my country and my voice. I chose my voice, so that I could still speak for my country.\" — Mohammad Rasoulof at Cannes 2024.",
    familyDamage: "Rasoulof's family members faced questioning after his escape. His actors and crew members in Iran were also interrogated and faced travel bans.",
    analysis: "Artistic expression is seen as 'soft war' (Jang-e Narm) by the regime, making filmmakers primary targets for ideological purification.",
    regimeLens: {
      charge: "Propaganda against the Islamic Republic through artistic works",
      statute: "Islamic Penal Code Article 500",
      interpretation: "Any artistic depiction that does not align with the state's official narrative is classified as a subversive act of propaganda."
    },
    intlPressure: 60,
    intlPressureTooltip: "Rasoulof's Cannes prize generated significant cultural attention in Europe. Germany's submission of his film for the Oscars was a quiet diplomatic signal. But cultural pressure and political pressure are different things — he remains sentenced in absentia."
  },
  {
    id: 6,
    name: "NARGES MOHAMMADI",
    dates: "1972 – Present",
    title: "Nobel Peace Prize Laureate",
    portraitArt: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#333"/>
        <path d="M50 20 Q70 20 70 50 Q70 80 50 80 Q30 80 30 50 Q30 20 50 20" fill="#555"/>
        <path d="M30 30 Q50 10 70 30" fill="#C9A84C" stroke="#C9A84C" fillOpacity="0.3"/>
        <path d="M20 100 Q50 80 80 100" fill="#444"/>
      </svg>
    ),
    narrative: "You are Narges. You are in Evin Prison. You have not seen your children in years. The news reaches you through the prison walls: you have won the Nobel Peace Prize. The guards are furious. They tell you that if you try to send a message to the ceremony in Oslo, you will be placed in 'the white room'—total isolation. No letters. No phone calls. No sunlight.",
    choices: [
      { text: "Smuggle the speech out knowing the cost.", conscience: 30, survival: -30, id: 'smuggle' },
      { text: "Stay silent to protect your phone privileges.", conscience: -10, survival: 20, id: 'silent' },
      { text: "Ask your children to speak on your behalf.", conscience: 10, survival: 0, id: 'children' }
    ],
    reality: "Narges Mohammadi smuggled her speech out of Evin Prison. It was read by her twin children, Ali and Kiana, at the Nobel ceremony in December 2023. As predicted, her prison conditions were tightened. She remains a defiant voice from within the heart of the regime's most notorious prison, continuing to write and protest.",
    propaganda: "Narges Mohammadi is a convicted criminal serving a lawful sentence for crimes against national security. The Nobel Committee's decision represents blatant interference in Iran's internal affairs. The Islamic Republic rejects this politicized award entirely.",
    propagandaReality: "Mohammadi smuggled her Nobel acceptance speech out of Evin Prison. It was read by her children in Oslo. She had been arrested 13 times and sentenced to a combined 31 years in prison.",
    testimony: "\"They can imprison my body but they cannot imprison my will. I will never stop fighting for the women of Iran.\" — Narges Mohammadi from inside Evin Prison.",
    familyDamage: "Mohammadi's children grew up largely without her, her husband Taghi Rahmani in exile in France. She has been denied phone calls with them for years.",
    analysis: "The Nobel Prize for Mohammadi was a recognition that the struggle for human rights in Iran is led by women who refuse to be silenced even by stone walls.",
    regimeLens: {
      charge: "Spreading propaganda against the state (Repeated Offense)",
      statute: "Islamic Penal Code Article 500",
      interpretation: "Continued communication with international organizations while imprisoned is a secondary crime of undermining national security."
    },
    intlPressure: 55,
    intlPressureTooltip: "The Nobel Prize was the highest possible act of international recognition. Iran recalled its ambassador to Norway in protest. Mohammadi's children accepted the prize in Oslo. She is still in Evin Prison. The meter does not reach 100% — it never does."
  }
];

export default function App() {
  const [screen, setScreen] = useState('opening');
  const [conscience, setConscience] = useState(50);
  const [survival, setSurvival] = useState(50);
  const [intlPressure, setIntlPressure] = useState(20);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [showReality, setShowReality] = useState(false);
  const [choicesMade, setChoicesMade] = useState<string[]>([]);

  const resetGame = () => {
    setScreen('opening');
    setConscience(50);
    setSurvival(50);
    setIntlPressure(20);
    setChapterIndex(0);
    setShowReality(false);
    setChoicesMade([]);
  };

  const updateMeters = (c: number, s: number, choiceId: string) => {
    setConscience(prev => Math.max(0, Math.min(100, prev + c)));
    setSurvival(prev => Math.max(0, Math.min(100, prev + s)));
    setChoicesMade(prev => [...prev, choiceId]);
  };

  const currentChapter = chapters[chapterIndex];

  useEffect(() => {
    if (showReality && currentChapter) {
      setIntlPressure(currentChapter.intlPressure);
    }
  }, [showReality, currentChapter]);

  const getCarryForwardNote = () => {
    if (currentChapter.id === 4 && choicesMade.includes('flee')) {
      return "You left when you could. Nasrin Sotoudeh did not have that option. She never considered it.";
    }
    if (currentChapter.id === 5 && choicesMade.some(id => ['cooperate', 'dark', 'run', 'trust', 'quiet', 'prison', 'silent'].includes(id))) {
      return "You have stayed quiet when others could not. Mohammad Rasoulof never learned how.";
    }
    return null;
  };

  const carryForwardNote = getCarryForwardNote();

  // Filter choices for Mohammadi based on conscience
  const availableChoices = currentChapter.id === 6 && conscience >= 75
    ? [...currentChapter.choices, { text: "Write a full memoir from inside the prison, knowing it will add years to your sentence.", conscience: 40, survival: -40, id: 'memoir' }]
    : currentChapter.choices;

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#F5F0E8] font-serif selection:bg-[#C9A84C]/30 relative overflow-x-hidden">
      {/* Watermark */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 10 L65 45 L100 50 L65 55 L60 90 L55 55 L20 50 L55 45 Z' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3Ccircle cx='60' cy='50' r='15' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3Cpath d='M60 20 C80 20 100 40 100 60 C100 80 80 100 60 100 C40 100 20 80 20 60 C20 40 40 20 60 20' fill='none' stroke='%23C9A84C' stroke-width='0.3'/%3E%3Cpath d='M0 60 L120 60 M60 0 L60 120' stroke='%23C9A84C' stroke-width='0.2' opacity='0.3'/%3E%3Cpath d='M30 30 L90 90 M90 30 L30 90' stroke='%23C9A84C' stroke-width='0.2' opacity='0.3'/%3E%3C/svg%3E")` }} />

      {/* Header */}
      {screen !== 'opening' && screen !== 'final' && (
        <header className="fixed top-0 w-full p-4 bg-[#1a1a1a]/95 border-b border-[#C9A84C] z-50 backdrop-blur-sm flex justify-center"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L40 40 M40 0 L0 40' stroke='%23C9A84C' stroke-width='0.1' opacity='0.2'/%3E%3Crect x='19' y='19' width='2' height='2' fill='%23C9A84C' opacity='0.1'/%3E%3C/svg%3E")` }}>
          <div className="flex flex-col items-center w-full max-w-4xl px-4">
            <div className="flex gap-8 w-full">
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest text-[#C9A84C] mb-1 font-mono">Conscience</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-[#C9A84C] rotate-45 shrink-0" />
                  <div className="h-2 bg-white/10 border border-[#C9A84C]/30 relative overflow-hidden flex-1">
                    <motion.div 
                      initial={{ width: '50%' }}
                      animate={{ width: `${conscience}%` }}
                      className="h-full bg-[#C9A84C]"
                    />
                  </div>
                  <div className="w-1.5 h-1.5 bg-[#C9A84C] rotate-45 shrink-0" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest text-[#C9A84C] mb-1 font-mono">Survival</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-[#2D5A27] rotate-45 shrink-0" />
                  <div className="h-2 bg-white/10 border border-[#C9A84C]/30 relative overflow-hidden flex-1">
                    <motion.div 
                      initial={{ width: '50%' }}
                      animate={{ width: `${survival}%` }}
                      className="h-full bg-[#2D5A27]"
                    />
                  </div>
                  <div className="w-1.5 h-1.5 bg-[#2D5A27] rotate-45 shrink-0" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest text-[#C9A84C] mb-1 font-mono">INTL. PRESSURE</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-[#4A6FA5] rotate-45 shrink-0" />
                  <div className="h-2 bg-white/10 border border-[#C9A84C]/30 relative overflow-hidden flex-1">
                    <motion.div 
                      initial={{ width: '20%' }}
                      animate={{ width: `${intlPressure}%` }}
                      className="h-full bg-[#4A6FA5]"
                    />
                  </div>
                  <div className="w-1.5 h-1.5 bg-[#4A6FA5] rotate-45 shrink-0" />
                </div>
              </div>
            </div>
            
            <AnimatePresence>
              {showReality && currentChapter && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 bg-[#4A6FA5] p-3 border border-[#C9A84C]/30 shadow-xl max-w-2xl"
                >
                  <div className="text-white font-mono text-[11px] leading-relaxed">
                    <span className="font-bold uppercase mr-2">[DIPLOMATIC CABLE]:</span>
                    {currentChapter.intlPressureTooltip}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>
      )}

      <main className="relative z-10 max-w-[1300px] mx-auto px-6 py-24">
        <AnimatePresence mode="wait">
          {screen === 'opening' && (
            <motion.section 
              key="opening"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[80vh] flex flex-col items-center justify-center text-center py-12"
            >
              <h1 className="font-display text-5xl md:text-7xl text-[#C9A84C] mb-8 leading-tight">
                THE COST OF DISSENT:<br />VOICES FROM IRAN
              </h1>
              <p className="italic text-xl max-w-2xl mb-12 opacity-90">
                "Words matter. Especially in Iran, where what is permissible — to say, to do, to be seen to say or do — is an ever-changing thing."<br />
                <span className="text-sm not-italic opacity-60">— Anthony Bourdain, Parts Unknown, Tehran, 2014</span>
              </p>
              <div className="max-w-3xl text-lg text-justify mb-16 opacity-80 leading-relaxed">
                Since the 1979 Revolution, the Islamic Republic of Iran has been governed by the principle of Velayat-e Faqih (Guardianship of the Islamic Jurist). Under the Supreme Leadership of Ali Khamenei, the state maintains control through the Islamic Revolutionary Guard Corps (IRGC) and the Basij paramilitary. Legal frameworks like Article 286 of the Islamic Penal Code and the 2009 Cybercrime Law are frequently used to silence those who question the status quo. In this landscape, dissent is not merely a political act—it is a life-altering choice.
              </div>
              <button 
                onClick={() => setScreen('interlude')}
                className="w-32 h-32 rounded-full bg-[#8B0000] text-white font-display text-xl border-4 border-double border-[#C9A84C] shadow-[0_0_20px_rgba(139,0,0,0.5)] hover:scale-105 transition-transform flex items-center justify-center uppercase tracking-widest"
              >
                Begin
              </button>
            </motion.section>
          )}

          {screen === 'interlude' && (
            <motion.section 
              key="interlude"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-[#F5F0E8] text-[#2a2a2a] p-8 md:p-16 shadow-2xl rounded-sm">
                <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#8B4513] mb-8">Chapter 0: The Outsider Lens</div>
                <p className="text-xl mb-12">Before you step inside, consider what the world sees from the outside.</p>
                
                <div className="space-y-8 mb-16">
                  <blockquote className="font-display text-2xl border-l-4 border-[#C9A84C] pl-8 leading-snug">
                    "Iran was the most outgoingly warm, pro-American place we've ever shot."
                  </blockquote>
                  <blockquote className="font-display text-2xl border-l-4 border-[#C9A84C] pl-8 leading-snug">
                    "Twitter, Instagram, and Facebook were forbidden. Secret police were present but 'congenial'."
                  </blockquote>
                  <blockquote className="font-display text-2xl border-l-4 border-[#C9A84C] pl-8 leading-snug">
                    "The disconnect between the warmth of Iranian people and the brutality of their government was unlike anywhere I've visited."
                  </blockquote>
                </div>

                <p className="mb-12 text-lg">
                  Bourdain noted the case of Jason Rezaian, the Washington Post correspondent who had been "unfailingly affectionate and generous in his portrayal of Iran," yet was imprisoned without explanation shortly after their filming.
                </p>

                <div className="bg-[#fff9e6] p-8 rotate-1 shadow-lg text-[#333] text-2xl mb-12">
                  "Bourdain could leave. He could say whatever he wanted when he got home. The people who helped him could not.<br /><br />
                  Now you will meet five people who could not leave.<br /><br />
                  Would you have stayed?"
                </div>

                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => { setConscience(80); setSurvival(30); setScreen('game'); }}
                    className="group relative border border-[#C9A84C] p-4 text-left hover:bg-[#C9A84C]/10 transition-colors"
                  >
                    <span className="opacity-0 group-hover:opacity-100 absolute left-4 transition-opacity">⬥</span>
                    <span className="pl-8">I would have stayed and fought.</span>
                  </button>
                  <button 
                    onClick={() => { setConscience(40); setSurvival(70); setScreen('game'); }}
                    className="group relative border border-[#C9A84C] p-4 text-left hover:bg-[#C9A84C]/10 transition-colors"
                  >
                    <span className="opacity-0 group-hover:opacity-100 absolute left-4 transition-opacity">⬥</span>
                    <span className="pl-8">I would have found a way out.</span>
                  </button>
                </div>
              </div>
            </motion.section>
          )}

          {screen === 'game' && currentChapter && (
            <motion.section 
              key={`chapter-${currentChapter.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              <div className="grid md:grid-cols-[400px_1fr] gap-12">
                <div className="space-y-6 h-full self-stretch">
                  <div className="arabesque-border p-4 bg-[#C9A84C]/5 sticky top-32">
                    <div className="aspect-[3/4] bg-[#2a2a2a] border border-[#C9A84C] rounded-t-[150px] overflow-hidden relative">
                      <div className="absolute inset-2 border border-[#C9A84C]/30 rounded-t-[145px]" />
                      <div className="w-full h-full p-8">
                        {currentChapter.portraitArt}
                      </div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <h3 className="font-display text-3xl text-[#C9A84C]">{currentChapter.name}</h3>
                      <div className="font-mono text-xs uppercase tracking-widest opacity-60">{currentChapter.dates}</div>
                      <div className="font-mono text-xs uppercase tracking-widest opacity-60">{currentChapter.title}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {carryForwardNote && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-[#C9A84C]/10 border-l-2 border-[#C9A84C] p-4 italic text-sm opacity-80"
                    >
                      {carryForwardNote}
                    </motion.div>
                  )}
                  <div className="text-2xl leading-relaxed text-justify">
                    {currentChapter.narrative}
                  </div>

                  {!showReality ? (
                    <div className="flex flex-col gap-4 pt-8">
                      {availableChoices.map((choice, i) => (
                        <button 
                          key={i}
                          onClick={() => {
                            updateMeters(choice.conscience, choice.survival, choice.id);
                            setShowReality(true);
                          }}
                          className="group relative border border-[#C9A84C]/40 p-6 text-left hover:bg-[#C9A84C]/10 transition-all text-xl overflow-hidden"
                        >
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A84C] scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                          <div className="opacity-0 group-hover:opacity-100 absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                              <path d="M12 2 L15 10 L22 12 L15 14 L12 22 L9 14 L2 12 L9 10 Z" />
                            </svg>
                          </div>
                          <span className="group-hover:pl-10 transition-all duration-300 block">{choice.text}</span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white/5 border-l-4 border-[#C9A84C] p-8 space-y-6"
                    >
                      <h4 className="font-display text-2xl text-[#C9A84C]">The Reality</h4>
                      <p className="text-xl leading-relaxed">{currentChapter.reality}</p>
                      
                      {currentChapter.testimony && (
                        <div className="py-8 border-y border-[#C9A84C]/30 text-center">
                          <blockquote className="font-display text-3xl italic text-[#C9A84C] leading-tight">
                            {currentChapter.testimony}
                          </blockquote>
                        </div>
                      )}

                      {currentChapter.familyDamage && (
                        <div className="pt-4">
                          <div className="torn-paper -rotate-1 transform hover:rotate-0 transition-transform">
                            <h5 className="font-mono text-xs uppercase tracking-widest mb-2 font-bold border-b border-[#4a3728]/20 pb-1">Collateral Damage: Family Record</h5>
                            <p className="text-sm leading-relaxed">{currentChapter.familyDamage}</p>
                          </div>
                        </div>
                      )}

                      <div className="pt-6 border-t border-[#C9A84C]/20 italic opacity-80">
                        What This Tells Us: {currentChapter.analysis}
                      </div>

                      {/* Regime Propaganda Counter-Panel */}
                      <div className="mt-8 border border-[#8B0000] bg-[#222222] relative overflow-hidden">
                        {/* Faint Watermark */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 25 L55 30 L35 35 L30 55 L25 35 L5 30 L25 25 Z' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
                        
                        <div className="bg-[#8B0000] px-4 py-1 flex justify-between items-center">
                          <span className="font-mono text-[10px] font-bold text-white tracking-widest uppercase">
                            Islamic Republic of Iran — Official Statement
                          </span>
                          <span className="font-mono text-[10px] text-white/80">
                            {currentChapter.dates.match(/\d{4}/)?.[0] || ""}
                          </span>
                        </div>
                        
                        <div className="p-6 space-y-4 relative z-10">
                          <p className="font-mono text-sm leading-relaxed text-[#F5F0E8]/90 text-justify">
                            "{currentChapter.propaganda}"
                          </p>
                          <div className="pt-4 border-t border-[#C9A84C]/20">
                            <p className="font-serif italic text-[#C9A84C] text-lg">
                              <span className="not-italic font-bold mr-2">The Reality:</span>
                              {currentChapter.propagandaReality}
                            </p>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => {
                          if (chapterIndex < chapters.length - 1) {
                            setChapterIndex(prev => prev + 1);
                            setShowReality(false);
                          } else {
                            setScreen('final');
                          }
                        }}
                        className="bg-[#C9A84C] text-[#1a1a1a] px-8 py-3 font-mono font-bold uppercase tracking-widest hover:bg-[#F5F0E8] transition-colors"
                      >
                        {chapterIndex < chapters.length - 1 ? "Next Chapter" : "Final Analysis"}
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="relative bg-[#8B4513] p-8 border-4 border-double border-[#C9A84C] font-mono">
                <div className="absolute -top-3 right-8 bg-[#8B0000] px-3 py-1 text-[10px] tracking-tighter -rotate-2">CLASSIFIED / RESTRICTED</div>
                <h4 className="text-lg mb-4 border-b border-white/30 pb-2">REGIME LENS: LEGAL DOSSIER</h4>
                <div className="space-y-2">
                  <div className="font-bold text-[#C9A84C]">Charge: {currentChapter.regimeLens.charge}</div>
                  <div className="opacity-90">Statute: {currentChapter.regimeLens.statute}</div>
                  <div className="mt-4 italic opacity-80">Interpretation: {currentChapter.regimeLens.interpretation}</div>
                </div>
              </div>
            </motion.section>
          )}

          {screen === 'final' && (
            <motion.section 
              key="final"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="arabesque-border p-8 md:p-16 bg-[#C9A84C]/5 relative"
            >
              <div className="absolute inset-1 border-2 border-[#C9A84C] pointer-events-none" />
              
              <h2 className="font-display text-5xl text-[#C9A84C] text-center mb-12">THE WEIGHT OF CONSCIENCE</h2>
              
              {/* SECTION 1: YOUR VERDICT */}
              <div className="text-center text-2xl mb-16 max-w-3xl mx-auto leading-relaxed">
                <div className="text-[#C9A84C] font-mono text-xs uppercase tracking-[0.3em] mb-4">Final Assessment</div>
                {conscience >= 80 && survival <= 40 ? (
                  <p>"You chose truth at every turn. So did Narges Mohammadi. She is still in Evin Prison. Her children have grown up without her. She has never stopped writing. Your path is one of absolute integrity and absolute sacrifice."</p>
                ) : survival >= 80 && conscience <= 40 ? (
                  <p>"You survived. Many do, through silence. The regime counts on this. Every voice that goes quiet makes the next arrest easier. You are safe, but the architecture of repression remains untouched by your passage."</p>
                ) : conscience >= 90 ? (
                  <p>"You made every sacrifice. This is not heroism in the abstract — it is Nasrin Sotoudeh choosing her clients knowing the sentence waiting for her. It is Sattar Beheshti posting knowing they had his IP. You have reached the limit of what a single conscience can bear."</p>
                ) : survival >= 90 ? (
                  <p>"You are safe. You are also silent. In Iran, silence is not neutrality — it is the oxygen the regime breathes. You have mastered the art of invisibility in a state that demands total visibility."</p>
                ) : (
                  <p>"You tried to thread the needle — speak some truth, protect some safety. Most dissidents attempt this. The regime does not negotiate with nuance, yet it is in this gray space that the slow, grinding work of change often happens."</p>
                )}
              </div>

              {/* SECTION: INTERNATIONAL PRESSURE VERDICT */}
              <div className="mb-24 p-8 border border-[#4A6FA5]/30 bg-[#4A6FA5]/5">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-48 h-48 relative flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#4A6FA5" strokeWidth="1" strokeDasharray="2 2" />
                      <motion.circle 
                        cx="50" cy="50" r="45" 
                        fill="none" 
                        stroke="#4A6FA5" 
                        strokeWidth="4"
                        strokeDasharray="283"
                        initial={{ strokeDashoffset: 283 }}
                        animate={{ strokeDashoffset: 283 - (283 * intlPressure / 100) }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                      <text x="50" y="55" textAnchor="middle" fill="#4A6FA5" className="font-mono text-xl font-bold">{intlPressure}%</text>
                    </svg>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-[#4A6FA5] text-2xl font-display uppercase tracking-widest">International Pressure Analysis</h3>
                    <p className="text-lg leading-relaxed opacity-90 text-justify">
                      "International pressure reached its peak with the 2022 Woman Life Freedom uprising and Narges Mohammadi's 2023 Nobel Prize. It was not enough to free her. This is not a failure of individuals — it reflects a structural reality of authoritarian resilience: the Islamic Republic has survived sanctions, isolation, and global condemnation for over four decades by treating international pressure as a cost of doing business rather than an existential threat. The dissidents in this game understood this better than any foreign government. They acted anyway."
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mb-16">
                <div className="w-full h-[1px] bg-[#C9A84C]/30 relative flex items-center justify-center">
                  <div className="bg-[#1a1a1a] px-6">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#C9A84C" strokeWidth="1">
                      <path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" />
                      <circle cx="20" cy="20" r="6" />
                      <path d="M10 10 L30 30 M30 10 L10 30" strokeWidth="0.5" opacity="0.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* SECTION 2: PATTERNS OF REPRESSION */}
              <div className="grid md:grid-cols-2 gap-16 mb-24">
                <div className="space-y-6">
                  <h3 className="text-[#C9A84C] text-2xl font-display">Patterns of Repression</h3>
                  <div className="space-y-4 opacity-90 leading-relaxed text-justify">
                    <p>1. **The Legal Architecture of Suppression**: Iran's legal system is built on elastic charges. Article 286 (Sowing Corruption on Earth) and Article 500 (Propaganda against the State) function as catch-alls. These are not laws in the traditional sense; they are tools of ideological purification, designed to be broad enough to criminalize any act of independent thought or artistic expression.</p>
                    <p>2. **The Family Pressure Tactic**: Documented across decades is the regime's use of "Collateral Damage." By threatening, arresting, or harassing the family members of dissidents, the state weaponizes love. It forces a choice between personal integrity and the safety of one's children, parents, or spouse—a psychological torture that often proves more effective than physical walls.</p>
                    <p>3. **The International Dimension**: Global attention is a double-edged sword. While it can protect high-profile figures like Narges Mohammadi, it often fails the unnamed thousands. The world's response to the 2009 Green Movement was marked by a cautious desire for diplomatic stability, whereas the 2022 Woman Life Freedom uprising forced a more visceral, if still largely symbolic, international reckoning.</p>
                  </div>
                </div>

                {/* SECTION 3: WHAT COMES NEXT */}
                <div className="space-y-6">
                  <h3 className="text-[#C9A84C] text-2xl font-display">What Comes Next</h3>
                  <div className="space-y-4 opacity-90 leading-relaxed text-justify">
                    <p>The Woman Life Freedom movement represents a fundamental generational shift. Unlike previous uprisings, it is led by a youth population that has lost its fear. The role of the Iranian diaspora has become central, acting as a megaphone for those inside. While internal resistance faces a regime that has mastered the art of crushing dissent, the question is no longer if the system will change, but when the weight of its own repression will become unsustainable. The silence is being broken, one voice at a time.</p>
                  </div>
                </div>
              </div>

              {/* SECTION 4: BOURDAIN CODA */}
              <div className="bourdain-panel mb-24">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <h4 className="font-display text-3xl text-[#C9A84C]">A Final Reflection</h4>
                  <div className="text-xl leading-relaxed italic opacity-90">
                    "Anthony Bourdain died on June 8, 2018. He never saw the 2022 Woman Life Freedom uprising. He never saw Mahsa Amini's name become a rallying cry. He never saw Narges Mohammadi win the Nobel Peace Prize from inside the prison he once heard about from Jason Rezaian over dinner in Tehran.<br /><br />
                    He wrote of Iran: 'It's a place that can warm your heart one day and break it the next.'<br /><br />
                    It broke a lot of hearts in 2022. They are still breaking."
                  </div>
                </div>
              </div>

              {/* SECTION 5: WORKS CITED */}
              <div className="pt-12 border-t border-[#C9A84C]/30 font-mono text-[10px] space-y-4">
                <h5 className="uppercase tracking-widest text-[#C9A84C] mb-4 text-xs font-bold">Works Cited (MLA)</h5>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
                  <p className="indent-[-20px] pl-5">Amnesty International. "Iran: Arrests and Torture of Cyber-Activists." Amnesty.org, 2012.</p>
                  <p className="indent-[-20px] pl-5">BBC News. "Mahsa Amini: What we know about her death in custody." BBC.com, Sept. 2022.</p>
                  <p className="indent-[-20px] pl-5">CNN. "Anthony Bourdain: Parts Unknown - Iran Episode Notes." CNN Press Room, 2014.</p>
                  <p className="indent-[-20px] pl-5">Human Rights Watch. "Iran: Harsh Sentences for Human Rights Defenders." HRW.org, 2019.</p>
                  <p className="indent-[-20px] pl-5">Mohammadi, Narges. "White Torture: Inside Iran's Prisons for Women." Oneworld Publications, 2022.</p>
                  <p className="indent-[-20px] pl-5">Nobel Prize Committee. "The Nobel Peace Prize 2023: Narges Mohammadi." NobelPrize.org, Oct. 2023.</p>
                  <p className="indent-[-20px] pl-5">Rezaian, Jason. "Prisoner: My 544 Days in an Iranian Prison." Anthony Bourdain/Ecco, 2019.</p>
                  <p className="indent-[-20px] pl-5">Reuters. "Mohammad Rasoulof: The Filmmaker Who Fled the Mountains." Reuters.com, May 2024.</p>
                  <p className="indent-[-20px] pl-5">The Guardian. "Cannes 2024: Mohammad Rasoulof's The Seed of the Sacred Fig." TheGuardian.com, May 2024.</p>
                  <p className="indent-[-20px] pl-5">United Nations. "Report of the Special Rapporteur on the situation of human rights in the Islamic Republic of Iran." UN.org, 2023.</p>
                </div>
              </div>

              {/* PART 5: RESET BUTTON */}
              <div className="mt-24 flex flex-col items-center gap-4">
                <p className="italic text-sm opacity-60">Their stories do not reset. Yours can.</p>
                <button 
                  onClick={resetGame}
                  className="w-32 h-32 rounded-full bg-[#8B0000] text-white font-display text-xl border-4 border-double border-[#C9A84C] shadow-[0_0_20px_rgba(139,0,0,0.5)] hover:scale-105 transition-transform flex items-center justify-center uppercase tracking-widest"
                >
                  Begin Again
                </button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
