import { useDispatch } from "react-redux";
import { addMusicVideos } from "../utils/videoSlice";
import { useEffect } from "react";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

// const FALLBACK_VIDEO = [{
//   videoId: "xmbxe0Jtxmc",
//   title: "Featured Experience",
//   description:
//     "We’re curating the best content for you behind the scenes. In the meantime, enjoy this featured video — selected to deliver quality, relevance, and a seamless viewing experience from the very first moment.",
//   thumbnail: "",
// }];

const FALLBACK_VIDEO = [
  {
    videoId: "SslHscyqY1Y",
    title:
      "BORDER 2: Ghar Kab Aaoge (Lyrical)| Sunny D |Anu,Mithoon,Sonu, Roop,Arijit,Vishal,Diljit,Javed,Manoj",
    description:
      'Presenting the Full Song Lyrical Video of the most loved patriotic anthem that lives in every heart, "Ghar Kab Aaoge", from #BORDER2.\n\nGulshan Kumar, T-Series & JP Films Present\nA T-Series Films & JP Films Production\n\n"BORDER 2"\n\nIn Cinemas 23rd Jan 2026. Jai Hind 🇮🇳\n\n♪Full Song Available on♪ \nAmazon Prime Music: https://bit.ly/3N1I2yr \nSpotify: https://bit.ly/49hwSNd\nGaana: https://bit.ly/4bcGZ8G\nJioSaavn: https://bit.ly/4aH8VSa\nApple Music: https://bit.ly/4jjDX4y\nYouTube Music: https://bit.ly/3Nce2zP\n\nSong Credits: \nOriginal Song Composed by: Anu Malik \r\nOriginal Lyrics by: Javed Akhtar \r\nSong Recreated by: Mithoon \r\nLyrics by: Manoj Muntashir Shukla \r\nSingers: Sonu Nigam, Roop Kumar Rathod, Arijit Singh, Vishal Mishra & Diljit Dosanjh \r\nCreative Head: Anugrah\r\nMusic Production: Godswill Mergulhäo\r\nMusic Assistants: Anugrah, Godswill Mergulhäo, Eli Rodrigues & Kaushal Gohil.\r\nGuitars: Kalyan Baruah\r\nFlute: Rakesh Chaurasia\r\nWorld Strokes: Tapas Roy\r\nEsraj: Arshad Khan\r\nIndian Rhythm Ensemble: Raju Kulkarni, Satyajit Jamsandekar, Naeem Sayyed, Rahul Rupwate, Surinder Belbansi, Tejas Satardekar, Runal Sawant, Varad Kulkarni, Anugrah, Godswill Mergulhäo, Eli Rodrigues, & Kaushal Gohil.\r\nChoir Section Co-ordinator: Shripad Lele\r\nChoir Section: Shripad Lele, Umesh Joshi , Vivek Naik, Vijay Dhuri, Anil Bhilare, Janardan Dhatrak , Dattatray Mestry, Siddhant Karawde , Mangesh Shirke, Latesh Pujari, Sagar Kudalkar, Mohan Morajkar, Karan Kagale, Vaibhav Sutar, Vishal Jagtap, Pratap Kalke, Mohan Shravan, Gaurav Dandekar, Prasad Manjrekar, Vishal Tambe, Unmesh Chandavarkar, Shashank Mohite, Siddharth Joshi, Keshab Baruah, Vidit Patankar, Smit Vaidya, Chaitanya Shinde, Ekagra Upadhyay, Tanuj Manchanda, Dipanshu Tiwari, Abhishek Sharma, Nitin Karandikar & Nishad Joshi\r\nSong Recorded by Vijay Dayal at YRF Studios \nAssistant: Sagar Sathe\r\nAdditional Recording by A Manivannan at Living Water Studios.\r\nSong Mixed and Mastered by: Eric Pillai at Future Sound of Bombay \r\nAssistant Mixing Engineer: Michael Edwin Pillai \nVocals recorded @ Studio 504\nEngineer: Rahul M Sharma\nAssistant: Priyank Tayal\r\nMithoon’s Manager: Vijay Iyer \r\nMithoon’s Staff: Ganesh Raut & Sanjeev Utekar\r\nOriginal Song Licensed Courtesy: Ishtar Music (Believe Music India)\r\nMusic Label: T-Series\n\nFilm Credits:\n​Cast: Sunny Deol, Varun Dhawan, Diljit Dosanjh, Ahan Shetty, Mona Singh, Sonam Bajwa, Anya Singh, Medha Rana\nDirected By: Anurag Singh\nProduced By: Bhushan Kumar, Krishan Kumar\nProduced By: JP Dutta, Nidhi Dutta\nCo-Producer: Shiv Chanana\nCo-Producer: Binnoy K Gandhi\nPresident (T-Series): Neeraj Kalyan\nStory: Nidhi Dutta\n​Screenplay & Dialogues: Sumit Arora, Anurag Singh\nDOP: Anshul Chobey\nProduction Design: Mayur Sharma\nSupervising Producer: Siddhi Dutta\n​Executive Producer: Ashwini Kumar\nEditor: Manish More\nCostume Designer: Sheetal Sharma\n​Music: Anu Malik, Mithoon, Vishal Mishra, Sachet-Parampara, Gurmoh\n​Lyrics: Javed Akhtar, Manoj Muntashir Shukla, Kumaar, Kausar Munir\n​Background Music: John Stewart Eduri\n​Sound Designer: Nihar Ranjan Samal\nMix & Master: Eric Pillai @ Future Sound of Bombay\n​Finance Head: Rachna Bhagat\n​Casting Director: Mukesh Chhabra CSA\n​Action Director: Ravi Varma, Nick Powell, Parvez Shaikh, Allan Amin\n​Director Of Choreography: Raju Khan, Ganesh Acharya\n​Associate Director: Harshit Bhatia\n​1st Assistant Director: Sarvesh Shingre\n​Line Producer: Amit J. Chaudhary, Santosh Rai\n​Post Producer: Ankush Dhawan\n​Re-Recording Mixer: Debajit Changmai\n​VFX: Redefine, Labyrinth\n​VFX Supervisor: Vishal Anand, Soumen Das\n​VFX Creative Head (Labyrinth): Siddhartha Jayakar\n​DI: Prime Focus Ltd.\nDI Colorist: Ashirwad Hadkar\n​Music On: T-Series\n​Project Head (T-Series): Meghha Chheda\n​Music Head (T-Series): Shivam Chanana\n​Music Marketing Head (T-Series): Vivin Sachdeva\n​Film Marketing Lead (T-Series): Neel Mehta\n​Film PR Lead (T-Series): Rahul Dubey\nFilm Digital Marketing Lead (T-Series): Shahrukh Khan\n​Film Marketing & Promotions (T-Series): Mita Choudhary, Heett Savla\nMusic Team (T-Series): Raj Chanana, Sonal Chawla, Sonu Srivastava, Vivin Sachdeva\nMusic Marketing Team (T-Series): Sana Shaikh, Raisa Ghosh\nDigital Team (T-Series): Varun Arora, Juhi Singh, Praveen Sharma\n​Publicity Design: Parass Kanani (House Of Awe)\n​Digital Marketing: White Rivers Media\n​Visual Promotions: Just Right Studioz NX\n\n#BORDER2 #GharKabAaoge #SandeseAateHai\n\n[Sandese Aate Hai, Sandeshe Aate Hain, Ghar Kab Aaoge, Border 2, Sunny Deol, Varun Dhawan, Diljit Dosanjh, Ahan Shetty, Mona Singh, Sonam Bajwa, Anya Singh, Medha Rana, Anu Malik, Javed Akhtar, Mithoon, Manoj Muntashir Shukla, Sonu Nigam, Roop Kumar Rathod, Arijit Singh, Vishal Mishra, Diljit Dosanjh]\n\n👉 Subscribe to T-Series:  https://www.youtube.com/tseries\n👉 Like us on Facebook:  https://www.facebook.com/tseriesmusic\n👉 Follow us on X:  https://x.com/tseries\n👉 Follow us on Instagram:  https://www.instagram.com/tseries.official\n👉 Follow us on Snapchat:  https://www.snapchat.com/@tseriesonsnap',
    thumbnail: "https://i.ytimg.com/vi/SslHscyqY1Y/hqdefault.jpg",
  },
  {
    videoId: "v0F4HLgmAZg",
    title:
      "Karathey Babu Teaser | Ravi Mohan | Daudee Jiwal | Ganesh K Babu | Sam CS | Screen Scene Media",
    description:
      "Presenting the official teaser of Karathey Babu, starring Ravi Mohan and directed by Ganesh K Babu. Produced by Screen Scene Media Entertainment, with music composed by Sam CS. An exciting glimpse into power, politics, and conflict.\n\nMovie Credits:\nBanner: Screen Scene Media Entertainment Pvt Ltd\nProduced By : Sundar Arumugam \nExecutive Producer: K S Senthil Kumar \nHead Of Distribution: S Kiran Kumar\n\nCast: \nRavi Mohan, Daudee S Jiwal, Shakthi Vasudevan, K.S. Ravi Kumar, Nasser, Kaali Venkat, Vtv Ganesh, Subramaniam Siva, Kavithalayaa Krishnan, Pradeep Antony, Raja Rani Pandian, Sandeep Raj, Knife Naren,\nVj Ashiq, Sindhupriya, Ajith Gosh, Aravindh, Kalki Raja, Sri Dhanya, Anandhi, Ilan, Sam Anderson, Vetrivel, Nandhini Senthamizh.\n\nCrew:\nDirector: Ganesh K Babu\nMusic Director: Sam Cs\nDirector Of Photography: Ezhil Arasu K \nEditor: Kathiresh Alagesan \nProduction Designer: Shanmugaraja\nAction Director: Dhilip Subbarayan\nCo- Writers: Rathna Kumar, Bakkiyam Sankar\nSound Designer: M. R. Rajakrishnan\nChoreographer: Sathish Krishnan\nCostume Designer: Gayathri Balasubramanian\nMake Up: R Seeralan Mani\nProduction Executive: Karthick Anandkrishnan\nPublicity Designer: Vikranth\nStills: Vishnu \nPRO: Nikil Murugan\nCo Director: Sa Baskaran\nScript Supervisor: Jayaprakash (JP)\nAssociate Directors: Sathish Sukumar, Viggnessh Saravanan, Manikandan Senthillkumar, Sanjay Sundar\nAsssistant Director: Saran Jee, Dileep Sengan, Sudharsana S, Chandrakanth, Mohan\nAssociate Cinematographers: Kannadasan Chezhiyan, M Adhiran\nAssistant Cinematographers: Anish Manikandan\nAssistant Editor: Rakesh Mariappan\nCostume Designer Assistant: Aravindh Ravi\nHaritha Dhanakumar\nDinesh DJ\nSuparnaa RD\nDarshna Ramesh\n\nMusic Composed, Arranged and Produced by SAM CS \nAdditional Programmer : Sathish Surrender \nVocals : Meenakshi Ilayaraja\nLive Rhythm : Raju, Lakshmikanth, Pyare Lal \nEngineered by Chidambara Kannan M, Aakash Edwin S @Psalter Record Inn Pvt Ltd. Chennai \nMixed and Mastered by Balu Thankachan @ 20db Sound Studios  \nProduction Management Team : Kannan, Indumathi K, Sathya Moorthy. \nMusic Co-ordinator : Velavan B \nTech Support : Parthiban @ The Pro Audio\n\n#KaratheyBabu #RaviMohan #RM34 #DaudeeJiwal #GaneshKBabu \n------------------------------------------------------------------------------------------------------------------\n\nSubscribe to our Channel - https://bit.ly/2UAQrs0\r\n\r\nIn Association with Divo\r\nhttp://www.facebook.com/divomovies\r\nhttps://twitter.com/divomovies",
    thumbnail: "https://i.ytimg.com/vi/v0F4HLgmAZg/hqdefault.jpg",
  },
  {
    videoId: "cBag6oWLX9A",
    title: "HACKER OR WHAT | JONATHAN IS BACK!! | BGMI!",
    description:
      "Hey Guys, I’m Jonathan Amaral, better known as Jonathan Gaming, a professional BGMI esports athlete and streamer.\n\nSince the start of my journey, my dedication to the game has been defined by precision, consistency, and an unstoppable grind. As an assaulter, I’ve built a reputation for clutch performances and high-impact gameplay, earning respect in the BGMI community. \n\nThrough years of dedication, I’ve honed my skills, adapting to every challenge and evolving with the game. Whether in high-stakes tournaments or streaming for the gaming community, my focus remains the same - pushing the limits and delivering top-tier gameplay.\n\nRedbull Athlete 🧢\nBGIS 2025 Runner up 🥈\nBGIS 2025 Finals MVP 👑\nBMPS 2024 2nd Runner up 🥉\nBGMS 2022 MVP 🏆\nBGMS 2022 Runner up 🥈\nBGIS 2021 Overall Top Fragger 🎯\nPMWL #2 Overall Fragger 💣\nPMCO Globals #4 Fragger 💣\nPMPL 2020 Finals #2 Fragger 🎯\nPMPL 2020 Finals Runner up 🥈\nPMIS 2020 Top Fragger 🎯\nPMIS 2020 India Champions 🏆\nPMCO 2019 Fall Split SA Champion 🏆\n\n\n Follow Me & Stay Connected! \n📷 Instagram - @ig_jonathangaming\n💬 Discord - https://discord.gg/jonathan\n📺 YouTube - https://www.youtube.com/@JONATHANGAMINGYT/\n🐦 Twitter - @ig_jonathan16\n\n🎮 Join the #JonathanArmy & Be Part of the Esports Revolution! 🎮\n💖 Like, Share & Subscribe for More Epic Content! 💖\n\n#JONATHANISLIVE #JONATHANBGMI #JONATHANGAMING #ESPORTS #BGMIINDIA #GAMING #LIVESTREAM",
    thumbnail: "https://i.ytimg.com/vi/cBag6oWLX9A/hqdefault.jpg",
  },
  {
    videoId: "T1ovb81sQGI",
    title:
      "Pawan Singh का दर्दभरा सरस्वती विसर्जन गीत - विदाई कइसे करी - Bidai Dj Remix Song 2026",
    description:
      '"अगर वीडियो पसंद आया हो तो चैनल को सब्सक्राइब करना न भूलें! ❤️🙏" - https://short-link.me/1cpVA \n\nPawan Singh का दर्दभरा सरस्वती विसर्जन गीत - विदाई कइसे करी - Bidai Dj Remix Song 2026\n\nAlbum - Vidai Kaise Kari\nSong - Vidai Kaise Kari\nSinger - Pawan Singh\nCompany/ Label :- Wave Music\n\n#sarswatipuja #bidaigeet \n#wavemusic',
    thumbnail: "https://i.ytimg.com/vi/T1ovb81sQGI/hqdefault.jpg",
  },
  {
    videoId: "2M4hKmuBzUU",
    title:
      "O'Romeo Official Trailer | Sajid N | Vishal B | Shahid K | Triptii D | Nana P | Avinash T | 13th Feb",
    description:
      "This Valentine’s, feel a love that’s pure and devotional! \n\n#ORomeo Trailer Out Now!\n\n#SajidNadiadwala presents\nA #VishalBhardwaj film\n\nGet ready for romance, chaos, and one unforgettable love story. O’ Romeo is all set to steal hearts. \nHit ‘I’m Interested’ now for exclusive updates & more only on BookMyShow.\nLink: https://bookmy.show/ORomeo\n\nStarring :\nShahid Kapoor\nTriptii Dimri\nAvinash Tiwary\nFarida Jalal \n\u2060Vikrant Massey (Special Appearance)\nNana Patekar\n\u2060Tamannaah Bhatia\nDisha Patani \nAruna Irani\nHussain Dalal \nRahul Deshpande\n\nProduced By Sajid Nadiadwala \nDirected By Vishal Bhardwaj \nStory: Hussain Zaidi\nScreenplay By: Vishal Bhardwaj & Rohan Narula\nDialogues by : Vishal Bhardwaj\nDirector Of Photography: Ben Bernhard, BVK\nCreative Producer: Priti Shahani\nAssociate Producer: Manuj Mittra\n\n\nMusic on T-Series\n\nO’Romeo Releases in Cinemas on 13th Feb 2026.\n\nFollow Us On :\r\n\r\nFacebook: www.facebook.com/NGEMovies\r\nTwitter: www.twitter.com/NGEMovies\r\nInstagram: www.instagram.com/NadiadwalaGrandson\r\nYouTube: www.youtube.com/NadiadwalaGrandson\r\nSnapchat: NGEMovies",
    thumbnail: "https://i.ytimg.com/vi/2M4hKmuBzUU/hqdefault.jpg",
  },
  {
    videoId: "eEiJhHuYcVw",
    title: "I Fooled Villager by Become Heartless in Minecraft..",
    description:
      "in this video i become heartless in minecraft..\n\n#minecraft \n#carrydepie",
    thumbnail: "https://i.ytimg.com/vi/eEiJhHuYcVw/hqdefault.jpg",
  },
  {
    videoId: "6brm-mj95nI",
    title:
      "Hae Go  |  New Sambalpuri Song | Full Music Video | Mantu Chhuria | Aseema Panda | Dory | 2026",
    description:
      "Mor Maa Samalei Production Presents The Wonderful New Official  Sambalpuri Music Video Of The Song ''Hae Go ''. This song is produced by Ramprashad Chhuria , Sung By Mantu Chhuria & Aseema Panda, beautifully penned by Pintu Chhuria & the music of this song is created and composed by Rehan Kamal & Mantu Chhuria.    \n\nAudio Credits :-  \n\nSong - Hae Go Singer - Mantu Chhuria & Aseema Panda \nMusic & Composed By - Rehan Kamal & Mantu Chhuria \nLyrics - Pintu Chhuria \nDrums - Anirudh Dhal (Babu Dada) \nVST Programming - Jaga JD \nBacking Vocals - Petu Dhulia & Viral Boy  \nChorus - Dileswar,Rehan,Ganesh,Radhe,Balram,Roshan \nRhythm - Pramod da, Manish Da,Radhe Da,Balram,Kalia,Pruthvi,Kana,Roshan,Petu Dhulia \nViolin - Jyoti \nRecorded At MRR Studio Cuttack \nRecordist - Harishankar Mohapatra \nVoice Dubbed By Nilakantha Naik \nMixed & Mastered By Shaktiswar Mahapatra  \n\nVideo Credits :- \n\nProduced By Ramprashad Chhuria  \nStarring - Mantu Chhuria \nFeaturing - Dreamgirl Dory \nDOP - Bishwajit Samal & Tubul Singh \nAsst. - Jayanta Banka , Subham Sahu , Nitesh Bhoi & Subodh \nEdit - Bishwajit Samal \nDI & Colorist  - Mahesh Patra(Digital Dreams)\nAE & FX(Roto Patch & Clean Up) - Tubul Singh \nConcept - Dileswar Bibhar \nChoreographed By S.Sudarshan Bivar \nDirected By B.NJ Niroj \nProduction Management - Prajwal Panda Bitu , Sana Kanta \nArt Director - Prashanta Bag (Babu) \nTent - Raja Tent House  \nFood - Rasanand Catering  \nMakeup - Piya Das  \nPoster & Publicity Designed By Deepak Bhoi (DZ Films) \nCostume Designer(Mantu Chhuria) - Ajay Meher  \nCostume Designer(Dory) - Peter Walter \nCostume - Maa Chitralaya , Radhakrushna Chitralaya ,Dressmeup\nLights & Equipment - Sudam Parida (TSCE Cuttack), Chandi Cine Equipment, J5 Lights  \nCreative Head - Sangram Mahapatra  \nCamera & Equipment - Digital Dreams , Samaleswari Cine Equipment , Biswajit Films , NB Films & MYTH Films \nLocation Owner - Tanish Poddar  \nDance Groups - Sambalpur Dance Group , Hirakud Dance Group , Dance Floor , Face To Face , UW Dance Group , Aryan Dance Group , Kalahandi Group , Brajrajnagar Group , Pooja Dance Group RKL,Aju Dance Group Binka \nBest Supporting  - Sidhu Saha , Chinta Bag & Rajiv Gond  \nSpecial Thanks - Pradeep Bapi , Ganesh Luha , Manisha Bag ,Sony Gond ,Aryan , Laxman , Deepak , Ajit , Badapratap , James Lal , Sumit , Chhotu , Jiten Dada , Tapan , Chandan Das , Nanu , Sachin , Biswajit , Sukta Bhai , Jaga  \n\n\nLyrics:-\n\nM-Haego...Haego... \n    Suna.. Haego..\n\nHaego Haego tike suna\nHaego Haego tike suna\nHaego Haego tike suna\nHaego Haego tike suna\n\nHaego Haego Suna Tamku dekhi kari \nHaye Haye re sundiri , A Mor Sundiri\nHae go suna tumar thhane.....\nRAHICHHE MOR MANA..\n\nAntara:-\nM-Gudunu Mudke go tumen sundiri ........ tumen sundiri\n    Gudunu Mudke go.....Mudke go......Mudke go\n    Gudunu Mudke go tumen sundiri\n    Tumar kaen bali gaemi guna \n    Tume pare go tume pare \n    Tume pare mor udiyan Janhan..\n\nF-Thau Go Thau Go babu A babu Thau \n    Ete Katha Mate Nai Kahana \n    Laaje Laaje Laaje Thari Jauchhe\n    Lubh Lubhani Mor Juba Jaubana\n\nM-Tumar Gaal ke Dekhi Kari  \n    Chal ke dekhi Kari\n    Haego Suna Tumar Thhane\n    RAHICHHE MOR MANA\n\n\nF-Eta Kaen Chalana Mor Dhana Go \n    Eta Kaen Chalana...\n    Katha Pade Kahemi Baluchhen \n    Kaen je Tame Nai Sunuchha \n\nM- Kana Kaheba je ta Kahi Diana\n\nF- Haego Haego Tike Suna  \n     Haego Haego Tike Suna  \n     Haego Haego Tike Suna  \n    Haego Haego Tike Suna \n\nHaego Haego Suna Tamku Dekhi Kari\nHaye Haye Mor Sundura\nA Mor Sundura\nHaego Suna Tumar Thhane\nRAHICHHE MOR MANA.... \n\nLIKE                  COMMENT                     SHARE                     SUBSCRIBE                                                \n\n                                         ANTI PIRACY WARNING  \n\nThis content is Copyright to Mantu Chhuria Official Youtube Channel. Any Un-authorized Reproduction, Re-distribution or Re-upload of this video is strictly prohibited. Legal action Shall be taken against those who violate the Copyright of this following material presented.",
    thumbnail: "https://i.ytimg.com/vi/6brm-mj95nI/hqdefault.jpg",
  },
  {
    videoId: "XZRhdi6svoY",
    title:
      "Om Shanti Shanti Shantihi - Official Trailer | Tharun Bhascker, Eesha Rebba | AR Sajeev | Jay Krish",
    description:
      "For more latest songs & videos, subscribe 👉 https://bit.ly/Saregama_Telugu\n\nPresenting the Official Trailer of Om Shanti Shanti Shantihi (Telugu) starring Tharun Bhascker Dhaassyam, Eesha Rebba, Brahmaji and others. Directed by A R Sajeev. \n\nMovie Credits: \nScreenplay and Directed By: A R Sajeev\nCast: Tharun Bhascker Dhaassyam, Eesha Rebba, Brahmaji and others\nProduced By: Srujan Yarabolu, Aditya Pittie, Vivek Krishnani, Anup Chandrasekharan, Sadhik shaik,  Naveen Sanivarapu\nMusic: Jay Krish\nCo-Producers: Kishore Jaladi, Bala Sowmitri\nDOP: Deepak Yaragera\nEditor: Director&Team\nAdditional Editor: Kalyan Surya Prakash\nProduction Designer: Vishnu Vardhan Pulla\nCostume Designer: Princi Vaidh \nDialogues: Nanda Kishore Emani\nAdditional Dialogues: Vinod Krishna Chodavarapu\nLyrics: Bharadwaj Gali\nAction: Wing Chun Anji\nCo-Director: Shivaa K Gurram\nFirst Asst.Director: Prathap K Basetty\nTrailer Cut : A R Sajeev, Walls & Trends, Naveen Kumar(NK)\nExecutive Producers: Bhuvan Salaru, Bala Sowmitri\nLine Producer: Irala Srinivasa Rao\nSound Mix: Santosh Kumar Vodnala\nSound Design: Sai Maneendhar Reddy (SILENCIO STUDIO)\nVFX: P Ravi Pavan\nColorist: Venkat Gadi (SRI SARATHI STUDIOS) \nPublicity Designs: Ideal Dots (Goutham Ambati &Team)\nPRO: Vamsi-Shekar\nDirection Team: Naveen Kumar(NK), Naga vamsi anuganti, Anudeep Potunuka, Anil Kumar Galla, Tejas, Kalyan Surya Prakash.\nMarketing and Trailer Cut: Walls & Trends\n\n\nLabel: Saregama India Limited, A RPSG Group Company\n\nTo buy Carvaan, visit https://www.saregama.com/carvaan/telugu\nTo buy virus free original tracks, visit  https://www.saregama.com/musicstore\nFollow us on: YouTube: @saregamasouth\nFacebook: http://www.facebook.com/Saregamatelugu\nX: https://twitter.com/saregamasouth\n\n#OmShantiShantiShantihi #TharunBhascker #EeshaRebba #SaregamaTelugu",
    thumbnail: "https://i.ytimg.com/vi/XZRhdi6svoY/hqdefault.jpg",
  },
  {
    videoId: "2NvGtCWvsBM",
    title: "₹1000 VS ₹5,00,000 F1 TICKETS",
    description:
      "Got a chance to experience the F1 action in Qatar — and the S25 Ultra matched that energy with power, performance aur ek true AI companion.\nGo and check it out !\n\nBuy now : https://www.samsung.com/in/smartphone...\n\n#GalaxyS25Ultra #TeamGalaxy #withGalaxy #SamsungPartner #GoogleGemini #NanoBanana\n\n @samsungindia\n\nSubscribe to our Second YouTube Channel: https://www.youtube.com/c/UjjwalGamer\n\n\nShare, Support, Subscribe!!!\nSubscribe: http://bit.ly/technogamerz\nDiscord : https://bit.ly/ujjwaldiscord\nYoutube: https://www.youtube.com/c/TechnoGamerzOfficial\nTwitter:  https://www.twitter.com/ujjwalgamer\nFacebook: https://www.facebook.com/technogamerz\nFacebook Myself: https://www.facebook.com/ujjwalgamer\nInstagram: https://instagram.com/ujjwalgamer\nGoogle Plus: https://plus.google.com/+TechnoGamerzOfficial\nWebsite: https://technogamerz.in/\nMerchandise: https://shop.technogamerz.in/\n\n\nBusiness Email : technogamerzofficial@gmail.com\n\n\nAbout : Techno Gamerz is a YouTube Channel, where you will find gaming videos in Hindi, I hope this video was Useful and you liked it, if you did press the thumbs up button.",
    thumbnail: "https://i.ytimg.com/vi/2NvGtCWvsBM/hqdefault.jpg",
  },
  {
    videoId: "1_JNUlsEQEE",
    title:
      "Full Video: Sasirekha | Mana ShankaraVaraPrasad Garu | Chiranjeevi, Nayanthara | Bheems | Anil R",
    description:
      "Here’s the “Sasirekha” Full Video Song featuring the legendary Chiranjeevi alongside Nayanthara, from the Mega Sankranthi Blockbuster Mana Shankaravaraprasad Garu - Pandagaki Vasthunnaru directed by Anil Ravipudi. With energetic music by Bheems Ceciroleo, \n\nThis Full Video gives a powerful glimpse into the fun, mass, and musical vibe of the film.\n\n#Sasirekha #fullvideo #Chiranjeevi #Nayanthara #BheemsCeciroleo\n#AnilRavipudi #ManaShankaravaraprasadGaru #Tollywood\n#ChiranjeeviNewMovie #TeluguCinema\n\n#Sasirekha #fullvideo #Chiranjeevi #Nayanthara #Bheems #AnilRavipudi #ManaShankaravaraprasadGaru #Tollywood #ChiranjeeviNewMovie #Sasirekha #TeluguCinema\n------------------------------------------ \nConnect with T-Series Telugu: 👉 http://bit.ly/SubscribeToTseriesTelugu\n------------------------------------------\n🎶 Music Slate 🎶\nSong: Sasirekha\nAlbum/Movie: Mana Shankaravaraprasad Garu\nArtist Name: Chiranjeevi,Nayanthara\nSinger: Bheems Ceciroleo,Madhupriya\nMusic Director: Bheems Ceciroleo\nLyricist: Anantha Sriram\n\n🎵 Musicians Credits🎵\nSong Composed And Arranged by Bheems Ceciroleo \nKeyboards & Rhythms - Dathu Eswar\nRhythms- Kalyan Chakravarthy\nAdditional Keyboards - Balu\nAdditional Vocals - Dathu Eswar\nFemale Harmony Vocals- Jayasri Pallem\nMale Chorus - Arjun Vijay, Tusher Sambhara, Bharadwaj Krishna\nFemale Chorus- Sindhuja Srinivasan, Lakshmi Meghana, Manisha Pandranki\nKids Chorus- Vagdevi, Shragvi, Sri Harini Pallela,\nVocals Recorded @ A Bheems Musicals And Jubilee10 Studio\nRecording Engineers - Mastan Vali, Rakesh Mickey\nVocals Melodyne & Song Pre-Mixed by Mastan Vali\nSong Mixed & Mastered by \nShadab Rayeen(New Edge - Mumbai)\nMusic Production Manager :\nMalya Kandukuri\nStudio Assistants-Sankaram, Rajesh\n\n🎬 Movie Details 🎬 \nMovie Name: Mana ShankaraVaraprasad Garu  \nCast: Megastar Chiranjeevi, Victory Venkatesh, Nayanthara, Catherine Tresa, VTV Ganesh,  \n\nTechnical Crew:  \nWriter & Director - Anil Ravipudi\nProducers - Sahu Garapati and Sushmita Konidela\nPresents - Smt.Archana\nBanners - Shine Screens and Gold Box Entertainments\nMusic Director - Bheems Ceciroleo\nCinematographer - Sameer Reddy\nExecutive Producer - S Krishna\nProduction Designer - A S Prakash\nEditor - Tammiraju\nCo-Writers - S Krishna, G AdiNarayana\nAction - V.Venkat, Nabakanta Singh\nVFX - Lavan & Kushan (DTM), Narendra Logisa, Knack Studios\nColorist: S Raghunath Varma ( DI B2H)\nPRO - Vamsi Shekar\nMarketing: Haashtag Media\n\nMusic Label: T-Series\n---------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Telugu: http://bit.ly/SubscribeToTseriesTelugu\n👉Like us on Facebook: http://www.facebook.com/Tseriestelugu\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n👉Follow us on Whatsapp: https://bit.ly/4cGF0YV\n👉Follow us on SnapChat: https://bit.ly/4jpOwCC \nThanks Everyone for Watching Our Latest Telugu Song 2025. If you like the song then Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Telugu songs of all time.",
    thumbnail: "https://i.ytimg.com/vi/1_JNUlsEQEE/hqdefault.jpg",
  },
];

const useMusicVideos = () => {
  const dispatch = useDispatch();

  const getMusicVideos = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos
          ?part=snippet
          &chart=mostPopular
          &regionCode=IN
          &videoCategoryId=10
          &maxResults=10
          &key=${YOUTUBE_API_KEY}`.replace(/\s+/g, ""),
      );

      const json = await res.json();
      debugger;
      if (json.error) {
        throw new Error(json.error.message);
      }

      const videos = json.items.map((item) => ({
        videoId: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
      }));

      dispatch(addMusicVideos(videos));
    } catch (error) {
      // console.error("YouTube API failed:", error.message);

      dispatch(addMusicVideos(FALLBACK_VIDEO));
    }
  };

  useEffect(() => {
    getMusicVideos();
  }, []);
};

export default useMusicVideos;
