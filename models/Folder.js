const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FolderSchema = new mongoose.Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    foldername: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Folder = mongoose.model('folder', FolderSchema);