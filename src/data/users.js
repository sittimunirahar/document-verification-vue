const users = [
  {
    "id": 1,
    "name": "John Smith",
    "email": "john.smith@example.com",
    "password": "456",
    "profile_picture_url": "https://placehold.co/600x400.png",
    "email_verified_at": "2022-01-01 15:38:33.0 Asia/Singapore (+08:00)",
    "identification_number": "S90000567A",
    "current_organisation": {
      "id": 2,
      "name": "Sample Bank ABC",
      "logo_url": "https://placehold.co/600x400.png",
      "is_personal": false 
    }
  },
  {
    "id": 2,
    "name": "Sitti Anisa Abdul Razak",
    "email": "anisa@example.com",
    "password": "123",
    "profile_picture_url": "https://placehold.co/600x400.png",
    "email_verified_at": "2022-06-11 15:38:33.0 Asia/Singapore (+08:00)",
    "identification_number": "S888888A",
    "current_organisation": {
      "id": 3,
      "name": "Vennila Anisa Associate",
      "logo_url": "https://placehold.co/600x400.png",
      "is_personal": true
    }
  }
];

const getUserByEmailPassword = (email, password) => {
    return users.find((user) => user.email === email && user.password === password);
  };

export default getUserByEmailPassword;
