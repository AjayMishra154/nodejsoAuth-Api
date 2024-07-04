const express = require('express');
const { 
  register, 
  login, 
  refreshToken, 
  revokeToken, 
  logout, 
  getUserById, 
  updateUserById, 
  deleteUserById,
  getAllUsers
} = require('../controllers/authController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/token', refreshToken);
router.post('/revoke', authenticateToken, revokeToken);
router.post('/logout', authenticateToken, logout);
router.post('/users',authenticateToken, getAllUsers);
router.get('/users/:id', authenticateToken, getUserById);
router.put('/users/:id', authenticateToken, updateUserById);
router.delete('/users/:id', authenticateToken, deleteUserById);

module.exports = router;
