import type { LinkType, AboutList, CardType } from "../types/types"
export const HeaderDataClient: LinkType[] = [
    {
        title: "الرئيسية",
        path: "/"
    },
    {
        title: "منتجاتنا",
        path: "product.html"
    },
    {
        title: "جحوزاتي",
        path: "MyBook.html"
    },
    {
        title: "من نحن",
        path: "AboutUs.html"
    },
    {
        title: "تواصل معنا",
        path: "ContactUs.html"
    },

];
export const HeaderDataAdmin: LinkType[] = [
    {
        title: "الرئيسية",
        path: "/"
    },
    {
        title: "العملاء",
        path: "product.html"
    },
    {
        title: "الموظفين",
        path: "scooter.html"
    },
    {
        title: " ادارة الاسكوتر ",
        path: "scooter.html"
    },
    {
        title: "تواصل معنا",
        path: "ContactUs.html"
    },

];
// about data
export const AboutListData: AboutList[] = [
    {
        title: "إلغاء الحجز مجاني لمدة تصل إلى 15 ساعة"
    },
    {
        title: "أكثر من 350.000 عميل راضٍ"
    },
    {
        title: "نحن نقدم المساعدة في تأجير الطرق على مدار الساعة طوال أيام الأسبوع"
    },
    {
        title: "أسطول يضم أكثر من 8000 دراجة نارية ودراجة نارية جديدة"
    }
]
//card date
import imgScooter1 from "@assets/images/scooter-3.jpg"
import imgScooter2 from "@assets/images/scooter-4.jpg"
export const CardDate: CardType[] = [
    {
        title: 'Metric  ES150 سكوتر',
        img: imgScooter1,
        price: '50',
        model: 'موديل 2024',
        color: 'اسود',
        des: 'يتميز سكوتر Metric ES150 بتصميم أنيق وعصري، يهدف إلى توفير الجمال والأداء الوظيفي. يشتمل تركيبها على مواد خفيفة الوزن من أجل خفة الحركة والقدرة على المناورة مع الحفاظ على المتانة والاستقرار.',
        available: true
    },

    {
        title: 'Minar Maxi سكوتر',
        img: imgScooter2,
        price: '50',
        model: 'موديل 2023',
        color: 'اخضر',
        des: 'يتميز سكوتر Minar Maxi بتصميم أنيق وعصري، يهدف إلى توفير الجمال والأداء الوظيفي. يشتمل تركيبها على مواد خفيفة الوزن من أجل خفة الحركة والقدرة على المناورة مع الحفاظ على المتانة والاستقرار.',
        available: false
    },
    {
        title: 'Jambretta 125 سكوتر',
        img: imgScooter1,
        price: '50',
        model: 'موديل 2022',
        color: 'اسود',
        des: 'يتميز سكوتر Jambretta 125 بتصميم أنيق وعصري، يهدف إلى توفير الجمال والأداء الوظيفي. يشتمل تركيبها على مواد خفيفة الوزن من أجل خفة الحركة والقدرة على المناورة مع الحفاظ على المتانة والاستقرار.',
        available: true
    },
    {
        title: 'Skupi سكوتر',
        img: imgScooter2,
        price: '50',
        model: 'موديل 2020',
        color: 'ازرق',
        des: 'يتميز سكوتر Skupi بتصميم أنيق وعصري، يهدف إلى توفير الجمال والأداء الوظيفي. يشتمل تركيبها على مواد خفيفة الوزن من أجل خفة الحركة والقدرة على المناورة مع الحفاظ على المتانة والاستقرار.',
        available: false
    },
    {
        title: 'Metric  ES150 سكوتر',
        img: imgScooter1,
        price: '50',
        model: 'موديل 2024',
        color: 'اسود',
        des: 'يتميز سكوتر Metric ES150 بتصميم أنيق وعصري، يهدف إلى توفير الجمال والأداء الوظيفي. يشتمل تركيبها على مواد خفيفة الوزن من أجل خفة الحركة والقدرة على المناورة مع الحفاظ على المتانة والاستقرار.',
        available: true
    },
    {
        title: 'Minar Maxi سكوتر',
        img: imgScooter2,
        price: '50',
        model: 'موديل 2023',
        color: 'اخضر',
        des: 'يتميز سكوتر Minar Maxi بتصميم أنيق وعصري، يهدف إلى توفير الجمال والأداء الوظيفي. يشتمل تركيبها على مواد خفيفة الوزن من أجل خفة الحركة والقدرة على المناورة مع الحفاظ على المتانة والاستقرار.',
        available: true
    },
    {
        title: 'Jambretta 125 سكوتر',
        img: imgScooter1,
        price: '50',
        model: 'موديل 2022',
        color: 'اسود',
        des: 'يتميز سكوتر Jambretta 125 بتصميم أنيق وعصري، يهدف إلى توفير الجمال والأداء الوظيفي. يشتمل تركيبها على مواد خفيفة الوزن من أجل خفة الحركة والقدرة على المناورة مع الحفاظ على المتانة والاستقرار.',
        available: false
    },
    {
        title: 'Skupi سكوتر',
        img: imgScooter2,
        price: '50',
        model: 'موديل 2020',
        color: 'ازرق',
        des: 'يتميز سكوتر Skupi بتصميم أنيق وعصري، يهدف إلى توفير الجمال والأداء الوظيفي. يشتمل تركيبها على مواد خفيفة الوزن من أجل خفة الحركة والقدرة على المناورة مع الحفاظ على المتانة والاستقرار.',
        available: true
    },

]
//footer links
export const footerFollow: LinkType[] = [
    {
        title: "فيسبوك",
        path: "#!"
    },
    {
        title: "انستجرام",
        path: "#!"
    },
    {
        title: "تويتر",
        path: "#!"
    },
];
export const footerContact: LinkType[] = [
    {
        title: "scooter@gmail.com",
        path:"#!"
    },
    {
        title: "scooterhelp@gmail.com",
        path:"#!"
    }
]