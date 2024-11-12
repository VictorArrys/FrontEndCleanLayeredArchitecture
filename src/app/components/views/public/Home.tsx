import React from 'react';
import { Link } from 'react-router-dom';

const HomeComponent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Encuentra tu próxima oportunidad laboral
          </h1>
          <p className="text-xl mb-8">
            Platform Works conecta talento con oportunidades de manera simple y efectiva
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/search-jobs"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Buscar Empleos
            </Link>
            <Link
              to="/post-job"
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-400 transition-colors"
            >
              Publicar Empleo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir Platform Works?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Proceso Simple"
            description="Registro rápido y fácil acceso a oportunidades laborales"
            icon="🎯"
          />
          <FeatureCard
            title="Conexiones Directas"
            description="Contacto directo entre empleadores y candidatos"
            icon="🤝"
          />
          <FeatureCard
            title="Oportunidades Diversas"
            description="Desde trabajos temporales hasta posiciones permanentes"
            icon="💼"
          />
        </div>
      </section>

      {/* Recent Jobs Section */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Empleos Recientes</h2>
          <Link to="/jobs" className="text-blue-600 hover:text-blue-700">
            Ver todos →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <JobCard
            title="Desarrollador Frontend"
            company="Tech Co."
            location="Remoto"
            type="Tiempo Completo"
          />
          <JobCard
            title="Diseñador UX/UI"
            company="Design Studio"
            location="Ciudad de México"
            type="Tiempo Parcial"
          />
        </div>
      </section>
    </div>
  );
};

// Componentes auxiliares
const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
};

const JobCard: React.FC<{
  title: string;
  company: string;
  location: string;
  type: string;
}> = ({ title, company, location, type }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-gray-600 mb-4">{company}</div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 text-sm">
          <span className="text-gray-500">📍 {location}</span>
          <span className="text-gray-500">⏰ {type}</span>
        </div>
        <Link
          to="/job-details"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Ver más →
        </Link>
      </div>
    </div>
  );
};

export default HomeComponent;