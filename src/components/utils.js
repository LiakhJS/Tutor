
export const host = 'https://strapi.cleverland.by';
export const apiBooks = `${host}/api/books`;
export const apiCategories = `${host}/api/categories`;
export const langs = [
'English',
    'MandarinChinese',
    'Hindi',
    'Spanish',
    'StandardArabic',
    'Bengali',
    'Russian',
    'Portuguese',
    'Urdu',
    'Indonesian',
    'German',
    'Japanese',
    'NigerianPidgin',
    'Marathi',
    'Telugu',
    'Turkish',
    'Tamil',
    'YueChinese',
    'Vietnamese',
    'Tagalog',
    'WuChinese',
    'Korean',
    'IranianPersianFarsi',
    'Hausa',
    'EgyptianSpokenArabic',
    'Swahili',
    'Javanese',
    'Italian',
    'WesternPunjabi',
    'Kannada',
    'Gujarati',
    'Thai'];
    
    export const levels=['A1',
        'A2',
        'B1',
        'B2',
        'C1',
        'C2'];
        
        export const currency=['USD',
        'EUR',
        'RUB',
        'PLN',
        'UAH',
        'CNY',
        'CHF',
        'GBP',
        'KZH'];
    
    export const langCode = ['EN',
    'RU',
    'BE',
    'ZH',
    'PL']

export const InputType = {
    Text: 'text',
    Password: 'password',
    Email: 'email',
    ChooseType: 'radio',
    DateOfBirth:'date',
    Price:'text',

    
}

export const InputId = {
    Email: 'email',
    Password: 'password',
    FirstName: 'firstName',
    LastName: 'lastName',
   DateOfBirth: 'dateOfBirth',
   Price:'price',
   Price2:'price2',


   
}
export const SelectId = {
    
   Country:'country',
   Language:'lang',
   Level:'level',
  
   Language2:'lang2',
   Level2:'level2',

   ProfSkills:'description',
   Goal:'description',
   Currency:'currency',
   LangCode:'langCode',
   
}
export const TextaeaId = {
    

    ProfSkills:'description',
    Goal:'description'
    
 }


export const InputPlaceholder = {
    Password: 'Пароль',
    CreatePassword: 'Придумайте пароль',
    PasswordConfirmation:'Повторите пароль',
    FirstName: 'Имя',
    LastName: 'Фамилия',
    Email: 'Email',
    Student:'Ученик',
    Teacher:'Преподаватель',
    DateOfBirth:'Дата рождения',
    Price:'Стоимость занятия (USD)',
    ChoosePrice:'Введите стоимость',
    
}
export const SelectPlaceholder = {
    Country: 'Откуда вы?',
    ChooseCountry:'Выберите страну',
    TeachingLanguage:'Язык преподавания',
    LearningLanguage:'Язык для изучения',
    SelectedLanguage:'Английский',
    ChooseLanguage:'Выберите язык',
    Level:'Уровень владения',
    ChooseLevel:'Выберите уровень',

}

export const TextareaPlaceholder = {
Goal:'Цель изучения',
    EnterText:'Введите текст',
    DescribeYourSkills: 'Опишите свои профессиональные навыки'
}
export const InputMessage = {
    CreateUserName: 'Используйте для логина латинский алфавит и цифры',
    Password: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
    FirstName: 'Поле не может быть пустым',
    LastName: 'Поле не может быть пустым',
    Email: 'Введите корректный e-mail',
    Tel: 'В формате +375 (xx) xxx-xx-xx',
    
    
}

