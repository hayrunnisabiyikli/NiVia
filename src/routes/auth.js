const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Kullanıcı kaydı
router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        
        // Email kontrolü
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Bu email adresi zaten kayıtlı' });
        }
        
        // Yeni kullanıcı oluşturma
        const user = new User({
            firstName,
            lastName,
            email,
            password
        });
        
        await user.save();
        
        // JWT token oluşturma
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        
        res.status(201).json({
            message: 'Kullanıcı başarıyla oluşturuldu',
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Sunucu hatası', error: error.message });
    }
});

// Kullanıcı girişi
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Kullanıcı kontrolü
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Geçersiz email veya şifre' });
        }
        
        // Şifre kontrolü
        const isValidPassword = await user.comparePassword(password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Geçersiz email veya şifre' });
        }
        
        // JWT token oluşturma
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        
        res.json({
            message: 'Giriş başarılı',
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Sunucu hatası', error: error.message });
    }
});

module.exports = router; 