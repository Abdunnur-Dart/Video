importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAOqH-YIBk3dJqFH-n11BZ2ftvTb-rLHXQ",
    authDomain: "webrtcch.firebaseapp.com",
    projectId: "webrtcch",
    storageBucket: "webrtcch.firebasestorage.app",
    messagingSenderId: "446715908287",
    appId: "1:446715908287:web:f773456e263ffd19b6f60a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Background message received:', payload);
    
    const notificationTitle = payload.notification?.title || 'Новое сообщение';
    const notificationOptions = {
        body: payload.notification?.body || payload.data?.text,
        icon: '/icon.png'
    };
    
    self.registration.showNotification(notificationTitle, notificationOptions);
});
