import { Routes } from '@angular/router';

/**
 * Configuración centralizada de rutas de la aplicación LTH
 * 
 * NOTA: Las rutas usan lazy loading para optimizar el rendimiento.
 * Los componentes se cargarán solo cuando el usuario navegue a esa ruta.
 */

export const routes: Routes = [
    // =================================================================
    // 1. CORE & REDIRECTS
    // =================================================================
    {
        path: '',
        loadComponent: () => import('./features/home/home/home').then(m => m.HomeComponent)
    },
    { path: 'inicio', redirectTo: '', pathMatch: 'full' },
    {
        path: 'buscar',
        loadComponent: () => import('./shared/components/buscar/buscar').then(m => m.BuscarComponent)
    },
    // Redirecciones de legado o variantes

    { path: 'moto-baterias', redirectTo: '/', pathMatch: 'full' },
    { path: 'banner', redirectTo: 'productos', pathMatch: 'full' },

    // =================================================================
    // 2. MAIN PAGES (Categorías Principales)
    // =================================================================
    {
        path: 'baterias',
        loadComponent: () => import('./features/products/baterias/baterias').then(m => m.BateriasComponent)
    },
    {
        path: 'moto-bateria',
        loadComponent: () => import('./features/products/moto-bateria/moto-bateria').then(m => m.MotoBateriaComponent)
    },
    {
        path: 'lubricantes',
        loadComponent: () => import('./features/products/lubricantes/lubricantes').then(m => m.LubricantesComponent)
    },
    {
        path: 'filtros',
        loadComponent: () => import('./features/products/filtros/filtros').then(m => m.FiltrosComponent)
    },
    {
        path: 'baterias-alcalinas',
        loadComponent: () => import('./features/products/baterias-alcalinas/baterias-alcalinas').then(m => m.BateriasAlcalinasComponent)
    },
    {
        path: 'centros-servicio-resultados',
        loadComponent: () => import('./features/support/centros-servicio-resultados/centros-servicio-resultados').then(m => m.CentrosServicioResultadosComponent)
    },
    {
        path: 'lth-domicilio',
        loadComponent: () => import('./features/products/lth-domicilio/lth-domicilio').then(m => m.LthDomicilioComponent)
    },
    {
        path: 'eventos',
        loadComponent: () => import('./features/events/eventos/eventos').then(m => m.EventosComponent)
    },


    // =================================================================
    // 3. INFORMATION & STATIC PAGES (Soporte, Ecología, Acerca de)
    // =================================================================
    // Acerca de
    { path: 'historia', redirectTo: '/', pathMatch: 'full' },
    { path: 'blog', redirectTo: '/', pathMatch: 'full' },

    // Tecnología
    {
        path: 'tecnologia',
        loadComponent: () => import('./features/about/tecnologia/tecnologia').then(m => m.TecnologiaComponent)
    },

    // Ecología y Responsabilidad
    {
        path: 'certificaciones',
        loadComponent: () => import('./features/about/certificaciones/certificaciones').then(m => m.CertificacionesComponent)
    },
    {
        path: 'programas-responsabilidad',
        loadComponent: () => import('./features/about/programas-responsabilidad/programas-responsabilidad').then(m => m.ProgramasResponsabilidadComponent)
    },
    {
        path: 'reciclaje',
        loadComponent: () => import('./features/about/reciclaje/reciclaje').then(m => m.ReciclajeComponent)
    },

    // Soporte y Garantía
    {
        path: 'abc-de-tus-productos',
        loadComponent: () => import('./features/support/abc-productos/abc-productos').then(m => m.AbcProductosComponent)
    },
    {
        path: 'garantia',
        loadComponent: () => import('./features/support/garantia/garantia').then(m => m.GarantiaComponent)
    },
    {
        path: 'instalacion-reemplazo',
        loadComponent: () => import('./features/support/instalacion-reemplazo/instalacion-reemplazo').then(m => m.InstalacionReemplazoComponent)
    },
    {
        path: 'mantenimiento',
        loadComponent: () => import('./features/support/mantenimiento/mantenimiento').then(m => m.MantenimientoComponent)
    },
    // Rutas de componentes internos de información
    {
        path: 'components/agm-libre-mantenimiento',
        loadComponent: () => import('./features/products/agm-libre-mantenimiento/agm-libre-mantenimiento').then(m => m.AgmLibreMantenimientoComponent)
    },
    {
        path: 'components/convencional',
        loadComponent: () => import('./features/products/convencional/convencional').then(m => m.ConvencionalComponent)
    },

    // =================================================================
    // 4. APPLICATIONS / BRANDS (Sub-apps)
    // =================================================================
    {
        path: 'app-america-batery',
        loadComponent: () => import('./features/brands/america-batery/america-batery').then(m => m.AmericaBateryComponent)
    },
    {
        path: 'app-hi-tec',
        loadComponent: () => import('./features/brands/hi-tec/hi-tec').then(m => m.HiTecComponent)
    },
    {
        path: 'app-diener-batery',
        loadComponent: () => import('./features/brands/diener-batery/diener-batery').then(m => m.DienerBateryComponent)
    },
    {
        path: 'app-battery-protect',
        loadComponent: () => import('./features/brands/battery-protect/battery-protect').then(m => m.BatteryProtectComponent)
    },
    {
        path: 'app-battery-evolution',
        loadComponent: () => import('./features/brands/battery-evolution/battery-evolution').then(m => m.BatteryEvolutionComponent)
    },
    {
        path: 'app-battery-evolution-auxiliar',
        loadComponent: () => import('./features/brands/battery-evolution-auxiliar/battery-evolution-auxiliar').then(m => m.BatteryEvolutionAuxiliarComponent)
    },
    {
        path: 'app-battery-cale',
        loadComponent: () => import('./features/brands/battery-cale/battery-cale').then(m => m.BatteryCaleComponent)
    },
    {
        path: 'app-battery-taxi',
        loadComponent: () => import('./features/brands/battery-taxi/battery-taxi').then(m => m.BatteryTaxiComponent)
    },
    {
        path: 'app-battery-optima',
        loadComponent: () => import('./features/brands/battery-optima/battery-optima').then(m => m.BatteryOptimaComponent)
    },
    {
        path: 'app-battery-heavy-duty',
        loadComponent: () => import('./features/brands/battery-heavy-duty/battery-heavy-duty').then(m => m.BatteryHeavyDutyComponent)
    },
    {
        path: 'app-battery-ciclado-profundo',
        loadComponent: () => import('./features/brands/battery-ciclado-profundo/battery-ciclado-profundo').then(m => m.BatteryCicladoProfundoComponent)
    },
    {
        path: 'app-battery-golf',
        loadComponent: () => import('./features/brands/battery-golf/battery-golf').then(m => m.BatteryGolfComponent)
    },
    {
        path: 'app-battery-podadora',
        loadComponent: () => import('./features/brands/battery-podadora/battery-podadora').then(m => m.BatteryPodadoraComponent)
    },
    {
        path: 'app-battery-marina',
        loadComponent: () => import('./features/brands/battery-marina/battery-marina').then(m => m.BatteryMarinaComponent)
    },
    {
        path: 'app-battery-lth',
        loadComponent: () => import('./features/brands/battery-lth/battery-lth').then(m => m.BatteryLthComponent)
    },
    // Páginas específicas de productos/proyectos LTH
    {
        path: 'lth-proyect',
        loadComponent: () => import('./features/products/lth-proyect/lth-proyect').then(m => m.LthProyectComponent)
    },
    {
        path: 'lth-evolution',
        loadComponent: () => import('./features/products/lth-evolution/lth-evolution').then(m => m.LthEvolutionComponent)
    },
    {
        path: 'lth-evolution-auxiliar',
        loadComponent: () => import('./features/products/lth-auxiliar/lth-auxiliar').then(m => m.LthAuxiliarComponent)
    },

    // =================================================================
        // 5. CATALOG: ALL BATTERIES
    // =================================================================
    {
        path: 'producto/:id',
        loadComponent: () => import('./features/catalog/battery-detail/battery-detail').then(m => m.BatteryDetailComponent)
    },

    {
        path: 'pagar',
        loadComponent: () => import('./features/cart/carrito/carrito').then(m => m.CarritoComponent)
    },
    {
        path: 'confirmacion',
        loadComponent: () => import('./features/cart/cart-confirmation/cart-confirmation').then(m => m.CartConfirmationComponent)
    },
    {
        path: '404',
        loadComponent: () => import('./shared/components/not-found/not-found').then(m => m.NotFoundComponent)
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
