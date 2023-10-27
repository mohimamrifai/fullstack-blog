export const errorHandler = async (err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
}