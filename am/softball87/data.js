const SOURCES = {
 schedule:'https://12thman.com/sports/softball/schedule/1987',
 book:'https://s3.us-east-2.amazonaws.com/sidearm.nextgen.sites/tamu.sidearmsports.com/documents/2023/1/23/2023_Record_Book.pdf#page=42',
 book2025:'https://12thman.com/documents/download/2025/1/7/2025_Softball_Record_Book.pdf',
 ncaa:'https://s3.amazonaws.com/fs.ncaa.org/Docs/stats/softball_wcws_stats/WCWS/tamu87.htm',
 news:'https://ncaanewsarchive.s3.amazonaws.com/1987/19870527.pdf#page=7',
 history:'https://www.ncaa.com/history/softball/d1',
 judy:'https://12thman.com/honors/texas-am-athletic-hall-of-fame/judy-whillock/253',
 andaya:'https://12thman.com/news/2006/4/19/205221535',
 image:'https://www.ncaa.com/news/softball/article/2020-08-07/longest-games-wcws-college-softball-history',
 stats:'https://12thman.com/documents/b91f0504-9fed-4935-8ef6-0eb045f32b5b.pdf'
};
const JOURNEY = [
 {date:'MAY 21',opponent:'Central Michigan',score:'3–0',title:'The first step.',tag:'WORLD SERIES · GAME 4',text:'A three-run shutout opened the Aggies’ stay in Omaha. Andaya went the distance, and A&M moved into the winners’ bracket. The first of five World Series victories was on the board.',id:4,foot:'A&M 1–0 in Omaha'},
 {date:'MAY 22',opponent:'Cal State Fullerton',score:'2–1',title:'Thirteen innings to move on.',tag:'WORLD SERIES · GAME 8',text:'The defending national champions would not go quietly. After eleven scoreless innings, both teams scored in the twelfth. A&M added another run in the thirteenth and held on. Andaya threw all thirteen innings in a game that lasted three hours and 25 minutes.',id:8,foot:'13 innings · A&M 2–0'},
 {date:'MAY 23',opponent:'UCLA',score:'0–1',title:'A narrower road.',tag:'WORLD SERIES · GAME 11',text:'UCLA scored in the first inning and made that run stand. A&M managed two hits against Lisa Longaker. The loss changed the route: every remaining game would have to be a win.',id:11,foot:'A&M 2–1 · Elimination path'},
 {date:'MAY 23',opponent:'Nebraska',score:'4–0',title:'Still here.',tag:'WORLD SERIES · GAME 12',text:'Later that day, the Aggies answered. Two runs in the fifth and two more in the sixth gave Andaya room to work. A nine-hit A&M offense and another shutout sent the team into Sunday with the championship still within reach.',id:12,foot:'A&M 3–1 · Two wins from the title'},
 {date:'MAY 24',opponent:'UCLA',score:'1–0',title:'Perfect, when it mattered.',tag:'WORLD SERIES · GAME 14',text:'Andaya retired every batter she faced. In the sixth, Carrie Heightley doubled to left-center to bring Judy Trussell home. It was the only run of the game, and the third perfect game in NCAA championship history. One more game remained.',id:14,foot:'Perfect game · A&M 4–1'},
 {date:'MAY 24',opponent:'UCLA',score:'4–1',title:'The ending they earned.',tag:'WORLD SERIES · GAME 15',text:'Three straight singles opened A&M’s first inning. Andaya drove in Julie Smith, then later added another RBI. The Aggies built a four-run lead; Smith finished with three hits. Andaya allowed only two hits and recorded her 36th win. Texas A&M was the national champion.',id:15,foot:'National champions · 56–8'}
];
const PLAYERS = [
 {name:'Renee Blaha',number:7,role:'Outfield / pinch runner',avg:'.231',hits:3,ab:13,rbi:0,gp:6,story:'Blaha appeared in all six World Series games and scored twice. In the championship clincher, she entered for Erika Eriksson and scored as the Aggies extended their lead.',note:'Roles shown reflect documented WCWS appearances; full season biography and interview pending.'},
 {name:'Shawn Andaya',number:8,role:'Pitcher',avg:'.176',hits:3,ab:17,rbi:2,gp:6,story:'Every inning in Omaha belonged to Andaya: 48 innings, 51 strikeouts and five victories. Her perfect game against UCLA kept A&M’s championship hopes alive; her two-hit victory in the next game finished the job. Texas A&M later recognized her as one of the NCAA’s 25th anniversary team selections.',feature:'48',label:'WORLD SERIES INNINGS',sources:['ncaa','andaya']},
 {name:'Liz Mizera',number:10,role:'Shortstop',avg:'.294',hits:5,ab:17,rbi:3,gp:6,story:'Mizera drove in three runs in Omaha, the most on the team. She started all six games and finished the tournament without an error across 28 fielding chances. Her contribution joined offense and defense at the center of the diamond.'},
 {name:'Erin Newkirk',number:12,role:'Center field',avg:'.105',hits:2,ab:19,rbi:2,gp:6,story:'Newkirk started all six World Series games in center field. Her championship-game single brought Renee Blaha home in the fourth inning, doubling A&M’s lead to 2–0.'},
 {name:'Karen Robertson',number:11,role:'Championship team member',story:'Robertson is identified in the front row of A&M’s official 1987 championship photograph. The digitized NCAA World Series statistics do not list an appearance for her. Her place on this team is documented; her full season role and personal story require additional reporting.',note:'Full season position, statistics and biography pending archival roster verification.'},
 {name:'Carrie Heightley',number:15,role:'Catcher / first base',avg:'.278',hits:5,ab:18,rbi:2,gp:6,story:'Her double supplied the run that made perfection a victory. In the sixth inning of the 1–0 win over UCLA, Heightley drove the ball to left-center and Judy Trussell came home. Heightley started all six games in Omaha.',feature:'1',label:'DECISIVE DOUBLE IN THE PERFECT GAME',sources:['news','ncaa']},
 {name:'Kelli Biggs',number:9,role:'First base',avg:'.000',hits:0,ab:0,rbi:0,gp:5,story:'Biggs appeared in five World Series games at first base. In the championship clincher, she recorded eight putouts. The tournament report lists no at-bats for her; a batting average is therefore not displayed.',note:'No at-bats in NCAA WCWS report; do not interpret the report’s .000 as a meaningful batting average.'},
 {name:'Erika Eriksson',number:18,role:'Catcher / designated player',avg:'.125',hits:1,ab:8,rbi:1,gp:5,story:'Eriksson appeared in five World Series games, contributing behind the plate and as the designated player. She caught the elimination-game shutout of Nebraska and singled in the title clincher.'},
 {name:'Julie Smith',number:2,role:'Second base',avg:'.391',hits:9,ab:23,rbi:0,gp:6,story:'A freshman led the Aggies in hits in Omaha. Smith collected nine, including three in the championship clincher, tying the Division I series record at the time. She scored five of A&M’s fourteen World Series runs.',feature:'9',label:'HITS IN THE WOMEN’S COLLEGE WORLD SERIES',sources:['news','ncaa']},
 {name:'Zina Ochoa',number:1,role:'Left field / designated player',avg:'.091',hits:1,ab:11,rbi:0,gp:6,story:'Ochoa appeared in all six World Series games and started in left field in the championship clincher. She singled in that game as part of A&M’s ten-hit offense.'},
 {name:'Julie Carpenter',number:14,role:'Pitcher / designated player',avg:'.000',hits:0,ab:3,rbi:0,gp:2,story:'Before Omaha, there was a season to carry. Carpenter finished 20–2 with a 1.20 ERA and 20 complete games. In the World Series she appeared twice as a hitter, including a start as the designated player in Andaya’s perfect game. The championship belonged to the entire pitching staff, even when one pitcher threw every inning in Omaha.'},
 {name:'Judy Trussell',number:6,role:'Third base / senior captain',avg:'.286',hits:6,ab:21,rbi:2,gp:6,story:'The senior captain had experienced A&M’s runner-up finishes in 1984 and 1986. In 1987, Trussell scored the only run of Andaya’s perfect game and added two hits in the clincher. A&M’s Hall of Fame biography recognizes her as co-team MVP with Andaya.',feature:'4',label:'RUNS SCORED IN OMAHA',sources:['judy','ncaa']},
 {name:'Tory Parks',number:5,role:'Right field',avg:'.176',hits:3,ab:17,rbi:0,gp:6,story:'Parks started all six World Series games in right field. She finished the tournament with three hits and a stolen base. Her name and number are preserved in the championship photograph and NCAA lineups.'}
];
const SEASON_BATTING = [
 {name:'Julie Smith',role:'Second base · Freshman',g:62,ab:222,r:46,h:80,avg:'.360',rbi:20},
 {name:'Liz Mizera',role:'Shortstop · Junior',g:61,ab:179,r:32,h:62,avg:'.346',rbi:43},
 {name:'Shawn Andaya',role:'Pitcher / DP · Senior',g:59,ab:181,r:21,h:54,avg:'.298',rbi:28},
 {name:'Renee Blaha',role:'Utility · Freshman',g:62,ab:143,r:21,h:42,avg:'.294',rbi:11},
 {name:'Tory Parks',role:'Right field · Sophomore',g:64,ab:158,r:19,h:44,avg:'.278',rbi:11},
 {name:'Judy Trussell',role:'Third base · Senior',g:64,ab:212,r:43,h:57,avg:'.269',rbi:31},
 {name:'Erin Newkirk',role:'Center field · Sophomore',g:64,ab:188,r:16,h:50,avg:'.266',rbi:21},
 {name:'Erika Eriksson',role:'Catcher · Sophomore',g:46,ab:105,r:16,h:27,avg:'.257',rbi:16}
];
const SEASON_PITCHING = [
 {name:'Shawn Andaya',wl:'36–6',ip:'302⅔',k:326,era:'0.44',cg:41,sho:22},
 {name:'Julie Carpenter',wl:'20–2',ip:'151⅔',k:71,era:'1.20',cg:20,sho:11}
];
