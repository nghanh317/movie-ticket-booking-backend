const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  director: String,
  actors: [String],
  duration: Number, // Phút
  releaseDate: Date,
  genres: [String],
  poster: String,
  trailerUrl: String,
  status: { type: String, enum: ['showing', 'upcoming', 'ended'], default: 'upcoming' }
});

module.exports = mongoose.model('Movie', movieSchema);