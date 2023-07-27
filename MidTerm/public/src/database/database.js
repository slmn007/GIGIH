use("Cinema");

db.createCollection("Users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "id",
        "username",
        "email",
        "password",
        "created_at",
        "updated_at",
      ],
      properties: {
        id: {
          bsonType: "int",
          description: "must be a int and is required",
        },
        username: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        email: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        password: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        created_at: {
          bsonType: "date",
          description: "must be a date and is required",
        },
        updated_at: {
          bsonType: "date",
          description: "must be a date and is required",
        },
      },
    },
  },
});

const users = [
  {
    id: 1,
    username: "melda",
    email: "user1@example.com",
    password: "user1password",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    username: "ipan",
    email: "user2@example.com",
    password: "user2password",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    username: "lutfi",
    email: "user3@example.com",
    password: "user3password",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 4,
    username: "fathur",
    email: "user4@example.com",
    password: "user4password",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 5,
    username: "adam",
    email: "user5@example.com",
    password: "user5password",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 6,
    username: "husnul",
    email: "user6@example.com",
    password: "user6password",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 7,
    username: "sulaiman",
    email: "user7@example.com",
    password: "user7password",
    created_at: new Date(),
    updated_at: new Date(),
  },
];

// *addMany to 'Users' Colections
db.Users.insertMany(users);

db.createCollection("Videos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id", "url_thumbnail", "url_video"],
      properties: {
        id: {
          bsonType: "int",
          description: "must be a int and is required",
        },
        url_thumbnail: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        url_video: {
          bsonType: "string",
          description: "must be a string and is required",
        },
      },
    },
  },
});

const videos = [
  {
    id: 1,
    url_thumbnail: "https://img.youtube.com/vi/nR-Tx-l6MLQ/sddefault.jpg",
    url_video: "https://www.youtube.com/embed/nR-Tx-l6MLQ",
  },
  {
    id: 2,
    url_thumbnail: "https://img.youtube.com/vi/cGunaa1lcKE/sddefault.jpg",
    url_video: "https://www.youtube.com/embed/cGunaa1lcKE",
  },
  {
    id: 3,
    url_thumbnail: "https://img.youtube.com/vi/PCs-8KTlhKg/sddefault.jpg",
    url_video: "https://www.youtube.com/embed/PCs-8KTlhKg",
  },
  {
    id: 4,
    url_thumbnail: "https://img.youtube.com/vi/Bot5gTQK_G0/sddefault.jpg",
    url_video: "https://www.youtube.com/embed/Bot5gTQK_G0",
  },
  {
    id: 5,
    url_thumbnail: "https://img.youtube.com/vi/ThkgJG2uk5A/sddefault.jpg",
    url_video: "https://www.youtube.com/embed/ThkgJG2uk5A",
  },
];

// *addMany to 'Videos' Colections
db.Videos.insertMany(videos);

db.createCollection("Products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "id",
        "name",
        "created_at",
        "updated_at",
        "video_id",
        "url_product",
        "cost",
        "available_quantity",
      ],
      properties: {
        id: {
          bsonType: "int",
          description: "must be a int and is required",
        },
        video_id: {
          bsonType: "int",
          description: "must be a int and is required",
        },
        available_quantity: {
          bsonType: "int",
          description: "must be a int and is required",
        },
        cost: {
          bsonType: "double",
          description: "must be a int and is required",
        },
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        url_product: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        created_at: {
          bsonType: "date",
          description: "must be a date and is required",
        },
        updated_at: {
          bsonType: "date",
          description: "must be a date and is required",
        },
      },
    },
  },
});

const products = [
  {
    id: 1,
    name: "ROG Phone 7",
    cost: 10.599,
    available_quantity: 10,
    url_product: "https://tokopedia.link/FHglRi7QCBb",
    created_at: new Date(),
    updated_at: new Date(),
    video_id: 1,
  },
  {
    id: 2,
    name: "POCO X5 Pro 5G",
    cost: 4.299,
    available_quantity: 10,
    url_product: "https://tokopedia.link/SE6xzPycrxb",
    created_at: new Date(),
    updated_at: new Date(),
    video_id: 2,
  },
  {
    id: 3,
    name: "Infinix Note 30",
    cost: 2.599,
    available_quantity: 10,
    url_product: "https://tokopedia.link/ZC2QzlGK9Ab",
    created_at: new Date(),
    updated_at: new Date(),
    video_id: 3,
  },
  {
    id: 4,
    name: "POCO F5",
    cost: 4.999,
    available_quantity: 10,
    url_product: "https://tokopedia.link/E719pIMK9Ab",
    created_at: new Date(),
    updated_at: new Date(),
    video_id: 4,
  },
  {
    id: 5,
    name: "Redmi Note 12",
    cost: 2.919,
    available_quantity: 10,
    url_product: "https://tokopedia.link/EjcI4ZHv0yb",
    created_at: new Date(),
    updated_at: new Date(),
    video_id: 5,
  },
];

// *addMany to 'Products' Colections
db.Products.insertMany(products);

db.createCollection("Comments", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id", "video_id", "id_user", "comment", "timeStamp"],
      properties: {
        id: {
          bsonType: "int",
          description: "must be a int and is required",
        },
        video_id: {
          bsonType: "int",
          description: "must be a int and is required",
        },
        id_user: {
          bsonType: "int",
          description: "must be a int and is required",
        },
        comment: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        timeStamp: {
          bsonType: "date",
          description: "must be a date and is required",
        },
      },
    },
  },
});

const comments = [
  {
    id: 1,
    video_id: 1,
    id_user: 1,
    comment:
      "Itulah hebatnya RoG. Mereka paham betul siapa target pasar mereka, makanya kamera alakadarnya gada OIS, gada wireless charging, gada IP68(Siapa juga sih yg maen game di dalem air). Bagi orang lain itu kelemahan tapi bagi gamers itu ga masalah, RoG tetap fokus pada target pasar mereka yang mementingkan performa mesinnya dengan harga yang bisa dibilang jempolan. Approve buat RoG👍❤🔥",
    timeStamp: new Date(),
  },
  {
    id: 2,
    video_id: 1,
    id_user: 2,
    comment:
      "Sebagai pengguna ROG phone 5, puas banget sih. Sampe sekarang masih mulus walaupun udah kebanting sama anak beberapa kali, sama performa buat gaming tipis2 enak juga",
    timeStamp: new Date(),
  },
  {
    id: 3,
    video_id: 1,
    id_user: 3,
    comment:
      "SD 8 Gen 2 Regular Fabrikasi TSMC N4P 4nm emg terbaik dalem jaga Efisiensi Daya meski Performa Monster. Jujur gue bakal ttp setuju kalo nih SoC di bikin ulang dgn Fabrikasi 1nm nya TSMC pasti bakal lebih adem & irit di performa yg sama 😁",
    timeStamp: new Date(),
  },
  {
    id: 4,
    video_id: 2,
    id_user: 3,
    comment:
      "Emang brand Xiaomi keren ... Chipset bagus harga terjangkau... koleksi saya Mulai dari redmi 4x , redmi note 10 , dan sekarang beralih ke poco m3 pro 5G , Poco X3 Pro Alhamdulillah awet sampai sekarang... Tak pernah ada kendala... Masih stabil baik harga maupun kualitasnya..",
    timeStamp: new Date(),
  },
  {
    id: 5,
    video_id: 2,
    id_user: 1,
    comment:
      "Poco x5 pro is the beast, ini yang saya cari walaupun performa gk maksimal yang penting serba ada, gk kayak x5 reguler harus relain speaker, mesin geter, kamera. 🥰",
    timeStamp: new Date(),
  },
  {
    id: 6,
    video_id: 2,
    id_user: 4,
    comment:
      "Paling suka sama pembawaan gadgetin ya jujur apa adanya si sama brand. Kek kalo bagus ya di bilang bagus. Kalo jelek yang di bilang jeleknya dimana. Yang sebagai orang awam kita konsumen bisa memilih dan memilah sesuai kebutuhan. Beda sama chanel lain yang lebih utamain dapet sponsor/support brand.",
    timeStamp: new Date(),
  },
  {
    id: 7,
    video_id: 3,
    id_user: 1,
    comment:
      "Dari dulu udah suka sama brand Infinix karena selalu setiap launching hp baru selalu berbeda-beda gk pernah monoton. Tapi sebagai user Infinix kalau ada kerusakan, sparepartnya susah sedangkan untuk Service Centernya belum luas harus ke luar kota yang perlu akomodasi lebih🙂",
    timeStamp: new Date(),
  },
  {
    id: 8,
    video_id: 3,
    id_user: 7,
    comment:
      "Gadget In yg review mah auto laris manis, harusnya brand antisipasi lonjakan permintaan pasarnya nih biar stok aman dan harga stabil",
    timeStamp: new Date(),
  },
  {
    id: 9,
    video_id: 3,
    id_user: 4,
    comment:
      "Gua kalo mau beli hp, wajib lihat reviewnya bg david... Caranya review masuk akal dan memberi pencerahan, gak melebih2kan... Pokoknya kerennn mantap bg david.",
    timeStamp: new Date(),
  },
  {
    id: 10,
    video_id: 4,
    id_user: 1,
    comment:
      "Untung ada channel gadgetin dengan bang davidnya, yg bisa mewakili dan menyampaikan uneg-uneg netizen tentang kekurangan dan keluhan dari brand² hp, jadi brand² hp bisa mendengar, dan berharap brand² hp terutama POCO mau mendengarkan!",
    timeStamp: new Date(),
  },
  {
    id: 1,
    video_id: 4,
    id_user: 7,
    comment:
      "Gokil sih cara reviewnya beda terus, sesuai hypenya kalo ngomongin Poco pasti spek spek spek yang affordable !!! Terus berinovasi bang david",
    timeStamp: new Date(),
  },
  {
    id: 12,
    video_id: 4,
    id_user: 4,
    comment:
      "Gua kalo mau beli hp, wajib lihat reviewnya bg david... Caranya review masuk akal dan memberi pencerahan, gak melebih2kan... Pokoknya kerennn mantap bg david.",
    timeStamp: new Date(),
  },
];

// *addMany to 'Comments' Colections
db.Comments.insertMany(comments);
