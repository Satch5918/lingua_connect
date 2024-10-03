import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { Trophy, Book, Clock, Users, Star } from 'lucide-react';

export default function UserProfile() {
  const languages = [
    { name: 'Inglés', level: 'B2', progress: 75 },
    { name: 'Francés', level: 'A2', progress: 30 },
  ];

  const achievements = [
    { icon: <Trophy size={16} />, name: '30 días seguidos' },
    { icon: <Book size={16} />, name: '100 ejercicios completados' },
    { icon: <Users size={16} />, name: '10 sesiones grupales' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <img src="/api/placeholder/40/40" className="rounded-full" alt="User avatar" />
            <div>
              <h2 className="text-xl font-semibold">Juan Pérez</h2>
              <span className="text-sm text-gray-500">Estudiante Dedicado</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Sección de Idiomas */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Idiomas</h3>
              {languages.map((lang, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{lang.name}</span>
                    <Badge variant="secondary">{lang.level}</Badge>
                  </div>
                  <Progress value={lang.progress} />
                </div>
              ))}
            </div>

            {/* Sección de Logros */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Logros</h3>
              <div className="flex flex-wrap gap-2">
                {achievements.map((achievement, index) => (
                  <Badge key={index} className="flex items-center gap-1">
                    {achievement.icon}
                    {achievement.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sección de Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="shadow-sm">
                <CardContent className="pt-4 flex items-center">
                  <Clock className="text-blue-500 w-5 h-5" />
                  <div className="ml-2">
                    <div className="text-sm text-gray-500">Tiempo total</div>
                    <div className="font-semibold">45 horas</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="pt-4 flex items-center">
                  <Star className="text-yellow-500 w-5 h-5" />
                  <div className="ml-2">
                    <div className="text-sm text-gray-500">Puntos</div>
                    <div className="font-semibold">1,250</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
