import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-green-500/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-sm flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">CraftWorld</h1>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors"
              >
                Новости
              </a>
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors"
              >
                Магазин
              </a>
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors"
              >
                Поддержка
              </a>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Играть
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 opacity-30">
          <img
            src="/img/2d7b95b3-ae7e-4893-9d2e-244cb5b4e993.jpg"
            alt="Minecraft world"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-green-600 text-white">
              🎮 Выживание • Экономика • Кланы
            </Badge>
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Лучший
              <br />
              <span className="text-green-400">Minecraft</span>
              <br />
              сервер
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Присоединяйся к 2000+ игрокам! Создавай кланы, развивай экономику,
              выживай в захватывающем мире приключений.
            </p>
            <div className="flex items-center space-x-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-8 text-white">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={20} className="text-green-400" />
                <span className="font-semibold">2,147</span>
                <span className="text-gray-300">онлайн</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Server" size={20} className="text-blue-400" />
                <span className="font-semibold">mc.craftworld.ru:25565</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">
              Почему именно мы?
            </h3>
            <p className="text-xl text-gray-300">
              Уникальные особенности нашего сервера
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sword" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Кланы и войны</CardTitle>
                <CardDescription className="text-gray-400">
                  Создавай кланы, захватывай территории, воюй за ресурсы
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-900/50 border-blue-500/20 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Coins" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Экономика</CardTitle>
                <CardDescription className="text-gray-400">
                  Развитая торговая система, магазины, аукционы
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Crown" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Выживание</CardTitle>
                <CardDescription className="text-gray-400">
                  Сложное выживание с уникальными мобами и боссами
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">
              Последние новости
            </h3>
            <p className="text-xl text-gray-300">
              Узнавай о всех обновлениях первым
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-600 text-white">
                  Обновление
                </Badge>
                <CardTitle className="text-white">
                  Новые кланы и территории
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Добавлены новые механики захвата территорий и система рейтинга
                  кланов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Icon name="Calendar" size={16} />
                  <span>5 дней назад</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-blue-500/20 backdrop-blur-sm">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-600 text-white">
                  Событие
                </Badge>
                <CardTitle className="text-white">
                  Конкурс на лучшую постройку
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Участвуй в конкурсе строительства и выигрывай ценные призы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Icon name="Calendar" size={16} />
                  <span>2 дня назад</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Магазин</h3>
            <p className="text-xl text-gray-300">
              Поддержи сервер и получи крутые бонусы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Стартовый</CardTitle>
                <CardDescription className="text-gray-400">
                  Базовые привилегии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-400 mb-4">
                  99₽
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Цветной ник</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Приват территории</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Стартовый набор</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">
                  Купить
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-blue-500/20 backdrop-blur-sm border-2">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-600 text-white">
                  Популярный
                </Badge>
                <CardTitle className="text-white">Премиум</CardTitle>
                <CardDescription className="text-gray-400">
                  Расширенные возможности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-400 mb-4">
                  299₽
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-blue-400" />
                    <span>Все из стартового</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-blue-400" />
                    <span>Кит каждые 12 часов</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-blue-400" />
                    <span>Доступ к /fly</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                  Купить
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">VIP</CardTitle>
                <CardDescription className="text-gray-400">
                  Максимальные привилегии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-400 mb-4">
                  599₽
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-purple-400" />
                    <span>Все из премиума</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-purple-400" />
                    <span>Эксклюзивные предметы</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-purple-400" />
                    <span>Приоритетный вход</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white">
                  Купить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Поддержка</h3>
            <p className="text-xl text-gray-300">
              Нужна помощь? Мы всегда на связи
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Discord</CardTitle>
                <CardDescription className="text-gray-400">
                  Присоединяйся к нашему Discord-серверу для общения с
                  администрацией
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Присоединиться
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-blue-500/20 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Email поддержка</CardTitle>
                <CardDescription className="text-gray-400">
                  Отправь нам письмо и получи ответ в течение 24 часов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Написать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-green-500/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-sm flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-white" />
              </div>
              <span className="text-white font-semibold">CraftWorld</span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Globe" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 CraftWorld. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
