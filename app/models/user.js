module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      Id: Number,
      userName: String,
      accountNumber: Number,
      emailAddress: String,
      identityNumber: Number,
    },
    {
      timestamps: true,
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });

  return mongoose.model("User", schema);
};
