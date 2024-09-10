const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/Rajdeep", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create MongoDB Schema
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  videos: {
    type: Number,
    required: true,
    unique: true,
  },
  auther: {
    type: String,
  },
  active: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Playlist = mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
  try {
    const nodePlaylist = new Playlist({
      name: "Node Js",
      type: "BackEnd",
      videos: 2,
      auther: "Rajdeep Rangra",
      active: true,
    });
    const reactPlaylist = new Playlist({
      name: "Php Language",
      type: "BackEnd",
      videos: 10,
      auther: "Rajdeep Rangra",
      active: true,
    });
    const PythonPlaylist = new Playlist({
      name: "Python Language",
      type: "BackEnd",
      videos: 5,
      auther: "Rajdeep Rangra",
      active: true,
    });
    const JavaPlaylist = new Playlist({
      name: "Java Language",
      type: "BackEnd",
      videos: 7,
      auther: "Rajdeep Rangra",
      active: true,
    });

    // For Save Single Value
    // const result = await reactPlaylist.save();

    // For Save Multiple Values
    const result = await Playlist.insertMany([
      nodePlaylist,
      PythonPlaylist,
      reactPlaylist,
      JavaPlaylist,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// const getDocument = async () => {
//   try {
//     const result = await Playlist.find({ videos: { $gt: 50 } });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const InDocument = async () => {
//   try {
//     const result = await Playlist.find({
//       type: { $in: ["FrontEnd", "BackEnd"] },
//     });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

const orCondiction = async () => {
  try {
    const results = await Playlist.find({
      $or: [{ videos: 10 }, { type: "BackEnd" }],
    });
    console.log(results); // Do something with the results
  } catch (err) {
    console.error("Error fetching documents:", err);
  }
};

const andCondition = async () => {
  try {
    const andResult = await Playlist.find({
      $and: [{ videos: 10 }, { type: "BackEnd" }],
    })

      .select({ name: 1 })
      .countDocuments();
    console.log(andResult);
  } catch (err) {
    console.error("Error in And Condtion", err);
  }
};

const sortCondition = async () => {
  try {
    const andResult = await Playlist.find({
      auther: "Rajdeep Rangra",
    }).sort({ name: -1 });
    console.log(andResult);
  } catch (err) {
    console.error("Error in And Condtion", err);
  }
};

const updateDocument = async (_id) => {
  try {
    const updateResult = await Playlist.findByIdAndUpdate(
      { _id },
      {
        $set: {
          auther: "Kaashvi Rangra",
        },
      },
      {
        new: true,
      }
    );
    console.log(updateResult);
  } catch (error) {
    console.error("Error in Update condition", error);
  }
};

const deleteDocument = async (_id) => {
  try {
    deleteData = await Playlist.findByIdAndDelete({ _id });
    console.log(deleteData);
  } catch (error) {
    console.error("Error in Deleting the data", error);
  }
};
// InDocument();
// getDocument();
// createDocument();
// orCondiction();
// andCondition();
// sortCondition();

deleteDocument("6646031a39780e7cb953db91");

// updateDocument("6645f96373a81f7574b8350b");
