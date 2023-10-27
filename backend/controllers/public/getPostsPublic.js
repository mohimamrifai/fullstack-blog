import Post from "../../models/PostsModel.js";

export const getPostsPublic = async (req, res) => {
  try {
    const resp = await Post.find({});
    res.json({
      message: "success",
      status_code: 200,
      result: resp,
    });
  } catch (error) {
    res.json({
      message: "Not Found",
      status_code: 404,
    });
  }
};
