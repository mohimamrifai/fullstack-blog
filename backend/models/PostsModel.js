import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    image : String,
    category: String,
    content: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    id_user: Number,
});

const Post = mongoose.model('Post', postSchema)

export default Post;