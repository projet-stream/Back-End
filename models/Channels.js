var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var express = require ( 'express' );

var ChannelSchema = new Schema({
    live: {type: Boolean , default: false} ,
    streamKey: {type: String , unique: true} ,
});


ChannelSchema.methods.toJSON  = function () {
    var obj = this.toObject ();
    delete obj.streamKey;
    return obj;
};

module.exports = mangoose.model("Channel", ChannelSchema);
