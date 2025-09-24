// sampleData.js
export const departments = ["CSE", "EEE", "CHE", "BIO", "ENG"];

export const deptStats = [
  { dept: "CSE", avgGPA: 3.45, passRate: 92, topStudents: [] },
  { dept: "EEE", avgGPA: 3.12, passRate: 88, topStudents: [] },
  { dept: "CHE", avgGPA: 3.05, passRate: 85, topStudents: [] },
  { dept: "BIO", avgGPA: 3.25, passRate: 89, topStudents: [] },
  { dept: "ENG", avgGPA: 3.30, passRate: 90, topStudents: [] },
];

export const students = [
  // 50 students (S001 - S050) distributed over 5 departments
  { id: "S001", name: "Arif Hossain", dept: "CSE", email: "arif.hossain@example.com", phone: "01710000001", semester: 6, cgpa: 4.00 },
  { id: "S002", name: "Rina Akter", dept: "CSE", email: "rina.akter@example.com", phone: "01710000002", semester: 6, cgpa: 3.80 },
  { id: "S003", name: "Sabbir Khan", dept: "CSE", email: "sabbir.khan@example.com", phone: "01710000003", semester: 6, cgpa: 3.75 },
  { id: "S004", name: "Nusrat Jahan", dept: "CSE", email: "nusrat.j@example.com", phone: "01710000004", semester: 5, cgpa: 3.68 },
  { id: "S005", name: "Imran Ali", dept: "CSE", email: "imran.ali@example.com", phone: "01710000005", semester: 6, cgpa: 3.60 },

  { id: "S006", name: "Tahsin Rahman", dept: "EEE", email: "tahsin.rahman@example.com", phone: "01710000006", semester: 6, cgpa: 3.55 },
  { id: "S007", name: "Lina Begum", dept: "EEE", email: "lina.begum@example.com", phone: "01710000007", semester: 5, cgpa: 3.50 },
  { id: "S008", name: "Monir Hossain", dept: "EEE", email: "monir.h@example.com", phone: "01710000008", semester: 6, cgpa: 3.48 },
  { id: "S009", name: "Fahim Sarker", dept: "EEE", email: "fahim.s@example.com", phone: "01710000009", semester: 4, cgpa: 3.40 },
  { id: "S010", name: "Razia Sultana", dept: "EEE", email: "razia.s@example.com", phone: "01710000010", semester: 6, cgpa: 3.35 },

  { id: "S011", name: "Robin Das", dept: "CHE", email: "robin.das@example.com", phone: "01710000011", semester: 6, cgpa: 3.70 },
  { id: "S012", name: "Shabnam Fatema", dept: "CHE", email: "shabnam.f@example.com", phone: "01710000012", semester: 5, cgpa: 3.60 },
  { id: "S013", name: "Faisal Ahmed", dept: "CHE", email: "faisal.a@example.com", phone: "01710000013", semester: 6, cgpa: 3.40 },
  { id: "S014", name: "Mita Roy", dept: "CHE", email: "mita.roy@example.com", phone: "01710000014", semester: 4, cgpa: 3.10 },
  { id: "S015", name: "Rashed Hasan", dept: "CHE", email: "rashed.h@example.com", phone: "01710000015", semester: 6, cgpa: 3.05 },

  { id: "S016", name: "Sumaiya Khan", dept: "BIO", email: "sumaiya.k@example.com", phone: "01710000016", semester: 6, cgpa: 3.85 },
  { id: "S017", name: "Jobayer Khan", dept: "BIO", email: "jobayer.k@example.com", phone: "01710000017", semester: 5, cgpa: 3.60 },
  { id: "S018", name: "Anika Sultana", dept: "BIO", email: "anika.s@example.com", phone: "01710000018", semester: 4, cgpa: 3.30 },
  { id: "S019", name: "Mithila Roy", dept: "BIO", email: "mithila.r@example.com", phone: "01710000019", semester: 6, cgpa: 3.20 },
  { id: "S020", name: "Sabbah Nazir", dept: "BIO", email: "sabbah.n@example.com", phone: "01710000020", semester: 6, cgpa: 3.15 },

  { id: "S021", name: "Noman Karim", dept: "ENG", email: "noman.k@example.com", phone: "01710000021", semester: 6, cgpa: 3.95 },
  { id: "S022", name: "Taslima Akhter", dept: "ENG", email: "taslima.a@example.com", phone: "01710000022", semester: 5, cgpa: 3.70 },
  { id: "S023", name: "Rasheda Parvin", dept: "ENG", email: "rasheda.p@example.com", phone: "01710000023", semester: 4, cgpa: 3.55 },
  { id: "S024", name: "Firoz Ahmed", dept: "ENG", email: "firoz.a@example.com", phone: "01710000024", semester: 6, cgpa: 3.40 },
  { id: "S025", name: "Jannatul Ferdous", dept: "ENG", email: "jannatul.f@example.com", phone: "01710000025", semester: 6, cgpa: 3.25 },

  // more to 50
  { id: "S026", name: "Rafiq Islam", dept: "CSE", email: "rafiq.i@example.com", phone: "01710000026", semester: 4, cgpa: 3.10 },
  { id: "S027", name: "Mona Akhter", dept: "CSE", email: "mona.a@example.com", phone: "01710000027", semester: 5, cgpa: 3.00 },
  { id: "S028", name: "Zakir Hossain", dept: "CSE", email: "zakir.h@example.com", phone: "01710000028", semester: 6, cgpa: 2.95 },
  { id: "S029", name: "Kamal Ahmed", dept: "EEE", email: "kamal.a@example.com", phone: "01710000029", semester: 4, cgpa: 3.05 },
  { id: "S030", name: "Mim Naz", dept: "EEE", email: "mim.n@example.com", phone: "01710000030", semester: 5, cgpa: 2.95 },

  { id: "S031", name: "Riyad Khan", dept: "CHE", email: "riyad.k@example.com", phone: "01710000031", semester: 6, cgpa: 3.20 },
  { id: "S032", name: "Shuvo Sarker", dept: "CHE", email: "shuvo.s@example.com", phone: "01710000032", semester: 4, cgpa: 2.90 },
  { id: "S033", name: "Puja Rani", dept: "BIO", email: "puja.r@example.com", phone: "01710000033", semester: 5, cgpa: 3.00 },
  { id: "S034", name: "Asraf Ali", dept: "BIO", email: "asraf.a@example.com", phone: "01710000034", semester: 6, cgpa: 2.85 },
  { id: "S035", name: "Morsalin Ahmed", dept: "ENG", email: "morsalin.a@example.com", phone: "01710000035", semester: 6, cgpa: 3.10 },

  { id: "S036", name: "Dilruba Khatun", dept: "CSE", email: "dilruba.k@example.com", phone: "01710000036", semester: 3, cgpa: 2.80 },
  { id: "S037", name: "Rimon Saha", dept: "EEE", email: "rimon.s@example.com", phone: "01710000037", semester: 3, cgpa: 2.75 },
  { id: "S038", name: "Nazmin Akter", dept: "CHE", email: "nazmin.a@example.com", phone: "01710000038", semester: 3, cgpa: 2.70 },
  { id: "S039", name: "Fahima Islam", dept: "BIO", email: "fahima.i@example.com", phone: "01710000039", semester: 2, cgpa: 2.65 },
  { id: "S040", name: "Ibrahim Shuvo", dept: "ENG", email: "ibrahim.s@example.com", phone: "01710000040", semester: 2, cgpa: 2.60 },

  { id: "S041", name: "Suman Das", dept: "CSE", email: "suman.d@example.com", phone: "01710000041", semester: 7, cgpa: 3.30 },
  { id: "S042", name: "Kawsar Hossain", dept: "EEE", email: "kawsar.h@example.com", phone: "01710000042", semester: 7, cgpa: 3.00 },
  { id: "S043", name: "Salma Begum", dept: "CHE", email: "salma.b@example.com", phone: "01710000043", semester: 7, cgpa: 3.05 },
  { id: "S044", name: "Niloy Roy", dept: "BIO", email: "niloy.r@example.com", phone: "01710000044", semester: 7, cgpa: 3.40 },
  { id: "S045", name: "Monica Paul", dept: "ENG", email: "monica.p@example.com", phone: "01710000045", semester: 7, cgpa: 3.55 },

  { id: "S046", name: "Tanvir Ahmed", dept: "CSE", email: "tanvir.a@example.com", phone: "01710000046", semester: 8, cgpa: 3.85 },
  { id: "S047", name: "Sadia Noor", dept: "EEE", email: "sadia.n@example.com", phone: "01710000047", semester: 8, cgpa: 3.45 },
  { id: "S048", name: "Kazi Shuvra", dept: "CHE", email: "kazi.s@example.com", phone: "01710000048", semester: 8, cgpa: 3.35 },
  { id: "S049", name: "Sadia Chowdhury", dept: "BIO", email: "sadia.c@example.com", phone: "01710000049", semester: 8, cgpa: 3.75 },
  { id: "S050", name: "Arifa Khan", dept: "ENG", email: "arifa.k@example.com", phone: "01710000050", semester: 8, cgpa: 3.88 },
];
