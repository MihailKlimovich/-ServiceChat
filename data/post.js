import { USERS } from './users'

export const POSTS = [
    {
        imageUrl: 'https://www.sakhaparliament.ru/images/IYjyhufAXQSWXvc7_OCelfHFzR3waPCpWoQ-VKBA6AZy0x80ynIhAMEwIgpvTp5jURbI2RaSdQUC-ayP34YkxTQ403ODJdxR8h_m7kkkroVUwAhYpB1gGSrFHkThxQlVwQX4M7wF5yd2dkWbqntuFkWHvS1FBK.jpg',
        user:USERS[0].user,
        likes: 7879,
        caption: 'Beautiful animal for you',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'sugashaw',
                comment: 'Wow! It\'s amazing!'
            },
            {
                user: 'aplist',
                comment: 'Wow! You have very beutiful animal!'
            }
        ]
    },
    {
        imageUrl: 'https://on-desktop.com/wps/Animals___Birds___The_bird_flies_043959_.jpg',
        user:USERS[1].user,
        likes: 8041,
        caption: 'Beautiful animal for you',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'aplist',
                comment: 'Wow! You have very beutiful animal!'
            }
        ]
    },
    {
        imageUrl: 'https://oir.mobi/uploads/posts/2021-05/1620331958_9-oir_mobi-p-milii-slonik-zhivotnie-krasivo-foto-9.jpg',
        user:USERS[2].user,
        likes: 18041,
        caption: 'Beautiful animal for you',
        profile_picture: USERS[2].image,
        comments: []
    },
    {
        imageUrl: 'https://funart.pro/uploads/posts/2021-07/1625860503_3-funart-pro-p-kamennaya-kunitsa-zhivotnie-krasivo-foto-4.jpg',
        user:USERS[3].user,
        likes: 141,
        caption: 'Beautiful animal for you',
        profile_picture: USERS[3].image,
        comments: [
            {
                user: 'sugashaw',
                comment: 'Wow! It\'s amazing!'
            },
            {
                user: 'aplist',
                comment: 'Wow! You have very beutiful animal!'
            }
        ]
    },
    {
        imageUrl: 'https://mobimg.b-cdn.net/v3/fetch/63/6333e2447e0a124b7462840cccd42f3a.jpeg',
        user:USERS[4].user,
        likes: 12011,
        caption: 'Beautiful animal for you',
        profile_picture: USERS[4].image,
        comments: [
            {
                user: 'sugashaw',
                comment: 'Wow! It\'s amazing!'
            },
            {
                user: 'aplist',
                comment: 'Wow! You have very beutiful animal!'
            }
        ]
    }                  
]
