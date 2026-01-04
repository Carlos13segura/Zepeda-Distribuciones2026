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
        loadComponent: () => import('./components/home/home').then(m => m.HomeComponent)
    },
    { path: 'inicio', redirectTo: '', pathMatch: 'full' },
    {
        path: 'buscar',
        loadComponent: () => import('./components/buscar/buscar').then(m => m.BuscarComponent)
    },
    // Redirecciones de legado o variantes

    { path: 'moto-baterias', redirectTo: '/', pathMatch: 'full' },
    { path: 'banner', redirectTo: 'productos', pathMatch: 'full' },

    // =================================================================
    // 2. MAIN PAGES (Categorías Principales)
    // =================================================================
    {
        path: 'baterias',
        loadComponent: () => import('./components/baterias/baterias').then(m => m.BateriasComponent)
    },
    {
        path: 'moto-bateria',
        loadComponent: () => import('./components/moto-bateria/moto-bateria').then(m => m.MotoBateriaComponent)
    },
    {
        path: 'lubricantes',
        loadComponent: () => import('./components/lubricantes/lubricantes').then(m => m.LubricantesComponent)
    },
    {
        path: 'filtros',
        loadComponent: () => import('./components/filtros/filtros').then(m => m.FiltrosComponent)
    },
    {
        path: 'baterias-alcalinas',
        loadComponent: () => import('./pages/baterias-alcalinas/baterias-alcalinas').then(m => m.BateriasAlcalinasComponent)
    },
    {
        path: 'centros-servicio-resultados',
        loadComponent: () => import('./pages/centros-servicio-resultados/centros-servicio-resultados').then(m => m.CentrosServicioResultadosComponent)
    },
    {
        path: 'lth-domicilio',
        loadComponent: () => import('./components/lth-domicilio/lth-domicilio').then(m => m.LthDomicilioComponent)
    },
    {
        path: 'eventos',
        loadComponent: () => import('./pages/eventos/eventos').then(m => m.EventosComponent)
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
        loadComponent: () => import('./pages/tecnologia/tecnologia').then(m => m.TecnologiaComponent)
    },

    // Ecología y Responsabilidad
    {
        path: 'certificaciones',
        loadComponent: () => import('./pages/certificaciones/certificaciones').then(m => m.CertificacionesComponent)
    },
    {
        path: 'programas-responsabilidad',
        loadComponent: () => import('./pages/programas-responsabilidad/programas-responsabilidad').then(m => m.ProgramasResponsabilidadComponent)
    },
    {
        path: 'reciclaje',
        loadComponent: () => import('./pages/reciclaje/reciclaje').then(m => m.ReciclajeComponent)
    },

    // Soporte y Garantía
    {
        path: 'abc-de-tus-productos',
        loadComponent: () => import('./pages/abc-productos/abc-productos').then(m => m.AbcProductosComponent)
    },
    {
        path: 'garantia',
        loadComponent: () => import('./pages/garantia/garantia').then(m => m.GarantiaComponent)
    },
    {
        path: 'instalacion-reemplazo',
        loadComponent: () => import('./pages/instalacion-reemplazo/instalacion-reemplazo').then(m => m.InstalacionReemplazoComponent)
    },
    {
        path: 'mantenimiento',
        loadComponent: () => import('./pages/mantenimiento/mantenimiento').then(m => m.MantenimientoComponent)
    },
    // Rutas de componentes internos de información
    {
        path: 'components/agm-libre-mantenimiento',
        loadComponent: () => import('./components/agm-libre-mantenimiento/agm-libre-mantenimiento').then(m => m.AgmLibreMantenimientoComponent)
    },
    {
        path: 'components/convencional',
        loadComponent: () => import('./components/convencional/convencional').then(m => m.ConvencionalComponent)
    },

    // =================================================================
    // 4. APPLICATIONS / BRANDS (Sub-apps)
    // =================================================================
    {
        path: 'app-america-batery',
        loadComponent: () => import('./components/america-batery/america-batery').then(m => m.AmericaBateryComponent)
    },
    {
        path: 'app-hi-tec',
        loadComponent: () => import('./components/hi-tec/hi-tec').then(m => m.HiTecComponent)
    },
    {
        path: 'app-diener-batery',
        loadComponent: () => import('./components/diener-batery/diener-batery').then(m => m.DienerBateryComponent)
    },
    {
        path: 'app-battery-protect',
        loadComponent: () => import('./components/battery-protect/battery-protect').then(m => m.BatteryProtectComponent)
    },
    {
        path: 'app-battery-evolution',
        loadComponent: () => import('./components/battery-evolution/battery-evolution').then(m => m.BatteryEvolutionComponent)
    },
    {
        path: 'app-battery-evolution-auxiliar',
        loadComponent: () => import('./components/battery-evolution-auxiliar/battery-evolution-auxiliar').then(m => m.BatteryEvolutionAuxiliarComponent)
    },
    {
        path: 'app-battery-cale',
        loadComponent: () => import('./components/battery-cale/battery-cale').then(m => m.BatteryCaleComponent)
    },
    {
        path: 'app-battery-taxi',
        loadComponent: () => import('./components/battery-taxi/battery-taxi').then(m => m.BatteryTaxiComponent)
    },
    {
        path: 'app-battery-optima',
        loadComponent: () => import('./components/battery-optima/battery-optima').then(m => m.BatteryOptimaComponent)
    },
    {
        path: 'app-battery-heavy-duty',
        loadComponent: () => import('./components/battery-heavy-duty/battery-heavy-duty').then(m => m.BatteryHeavyDutyComponent)
    },
    {
        path: 'app-battery-ciclado-profundo',
        loadComponent: () => import('./components/battery-ciclado-profundo/battery-ciclado-profundo').then(m => m.BatteryCicladoProfundoComponent)
    },
    {
        path: 'app-battery-golf',
        loadComponent: () => import('./components/battery-golf/battery-golf').then(m => m.BatteryGolfComponent)
    },
    {
        path: 'app-battery-podadora',
        loadComponent: () => import('./components/battery-podadora/battery-podadora').then(m => m.BatteryPodadoraComponent)
    },
    {
        path: 'app-battery-marina',
        loadComponent: () => import('./components/battery-marina/battery-marina').then(m => m.BatteryMarinaComponent)
    },
    {
        path: 'app-battery-lth',
        loadComponent: () => import('./components/battery-lth/battery-lth').then(m => m.BatteryLthComponent)
    },
    // Páginas específicas de productos/proyectos LTH
    {
        path: 'lth-proyect',
        loadComponent: () => import('./pages/lth-proyect/lth-proyect').then(m => m.LthProyectComponent)
    },
    {
        path: 'lth-evolution',
        loadComponent: () => import('./pages/lth-evolution/lth-evolution').then(m => m.LthEvolutionComponent)
    },
    {
        path: 'lth-evolution-auxiliar',
        loadComponent: () => import('./pages/lth-auxiliar/lth-auxiliar').then(m => m.LthAuxiliarComponent)
    },

    // =================================================================
    // 5. CATALOG: LTH AUTOMOTIVE (Standard L-Series)
    // =================================================================
    {
        path: 'producto/L-22F-450',
        loadComponent: () => import('./catalogo-baterias/l-22f-450/l-22f-450').then(m => m.L22F450Component)
    },
    {
        path: 'producto/L-42-400',
        loadComponent: () => import('./catalogo-baterias/l-42-400/l-42-400').then(m => m.L42400Component)
    },
    {
        path: 'producto/L-26R-500',
        loadComponent: () => import('./catalogo-baterias/l-26r-500/l-26r-500').then(m => m.L26R500Component)
    },
    {
        path: 'producto/L-58-575',
        loadComponent: () => import('./catalogo-baterias/l-58-575/l-58-575').then(m => m.L58575Component)
    },
    {
        path: 'producto/L-NS40-320',
        loadComponent: () => import('./catalogo-baterias/l-ns40-320/l-ns40-320').then(m => m.LNs40320Component)
    },
    {
        path: 'producto/L-NS40Z-320',
        loadComponent: () => import('./catalogo-baterias/l-ns40z-320/l-ns40z-320').then(m => m.LNs40z320Component)
    },
    {
        path: 'producto/LNS40L-340',
        loadComponent: () => import('./catalogo-baterias/lns40l-340/lns40l-340').then(m => m.LNs40l340Component)
    },
    {
        path: 'producto/L-44B19-335',
        loadComponent: () => import('./catalogo-baterias/l-44b19-335/l-44b19-335').then(m => m.L44b19335Component)
    },
    {
        path: 'producto/L-99(LBN1)-400',
        loadComponent: () => import('./catalogo-baterias/l-99-lbn1-400/l-99-lbn1-400').then(m => m.L99Lbn1400Component)
    },
    {
        path: 'producto/L-24-530',
        loadComponent: () => import('./catalogo-baterias/l-24-530/l-24-530').then(m => m.L24530Component)
    },
    {
        path: 'producto/L-42-500',
        loadComponent: () => import('./catalogo-baterias/l-42-500/l-42-500').then(m => m.L42500Component)
    },
    {
        path: 'producto/L-35-575',
        loadComponent: () => import('./catalogo-baterias/l-35-575/l-35-575').then(m => m.L35575Component)
    },
    {
        path: 'producto/L-24R-530',
        loadComponent: () => import('./catalogo-baterias/l-24r-530/l-24r-530').then(m => m.L24r530Component)
    },
    {
        path: 'producto/L-75-575',
        loadComponent: () => import('./catalogo-baterias/l-75-575/l-75-575').then(m => m.L75575Component)
    },
    {
        path: 'producto/L-42R-500',
        loadComponent: () => import('./catalogo-baterias/l-42r-500/l-42r-500').then(m => m.L42r500Component)
    },
    {
        path: 'producto/L-51-500',
        loadComponent: () => import('./catalogo-baterias/l-51-500/l-51-500').then(m => m.L51500Component)
    },
    {
        path: 'producto/L-51R-JIS-480',
        loadComponent: () => import('./catalogo-baterias/l-51r-jis-480/l-51r-jis-480').then(m => m.L51rJis480Component)
    },
    {
        path: 'producto/L-51R-500',
        loadComponent: () => import('./catalogo-baterias/l-51r-500/l-51r-500').then(m => m.L51r500Component)
    },
    {
        path: 'producto/L-51-JIS-480',
        loadComponent: () => import('./catalogo-baterias/l-51-jis-480/l-51-jis-480').then(m => m.L51Jis480Component)
    },
    {
        path: 'producto/L-65-800',
        loadComponent: () => import('./catalogo-baterias/l-65-800/l-65-800').then(m => m.L65800Component)
    },
    {
        path: 'producto/L-75-86-650',
        loadComponent: () => import('./catalogo-baterias/l-75-86-650/l-75-86-650').then(m => m.L7586650Component)
    },
    {
        path: 'producto/L-34-600',
        loadComponent: () => import('./catalogo-baterias/l-34-600/l-34-600').then(m => m.L34600Component)
    },
    {
        path: 'producto/L-41-650',
        loadComponent: () => import('./catalogo-baterias/l-41-650/l-41-650').then(m => m.L41650Component)
    },
    {
        path: 'producto/L-47(LN2)-550',
        loadComponent: () => import('./catalogo-baterias/l-47-ln2-550/l-47-ln2-550').then(m => m.L47Ln2550Component)
    },
    {
        path: 'producto/L-58R-575',
        loadComponent: () => import('./catalogo-baterias/l-58r-575/l-58r-575').then(m => m.L58r575Component)
    },
    {
        path: 'producto/L-27F-520',
        loadComponent: () => import('./catalogo-baterias/l-27f-520/l-27f-520').then(m => m.L27f520Component)
    },
    {
        path: 'producto/L-34/78-750',
        loadComponent: () => import('./catalogo-baterias/l-34-78-750/l-34-78-750').then(m => m.L3478750Component)
    },
    {
        path: 'producto/L-48/91(LN3)-615',
        loadComponent: () => import('./catalogo-baterias/l-48-91-ln3-615/l-48-91-ln3-615').then(m => m.L4891Ln3615Component)
    },
    {
        path: 'producto/L-27-700',
        loadComponent: () => import('./catalogo-baterias/l-27-700/l-27-700').then(m => m.L27700Component)
    },
    {
        path: 'producto/L-94R-800',
        loadComponent: () => import('./catalogo-baterias/l-94r-800/l-94r-800').then(m => m.L94r800Component)
    },
    {
        path: 'producto/L-30H-670',
        loadComponent: () => import('./catalogo-baterias/l-30h-670/l-30h-670').then(m => m.L30h670Component)
    },

    // =================================================================
    // 6. CATALOG: LTH ADVANCED (AGM / XEV)
    // =================================================================
    // XEV
    {
        path: 'catalogo-baterias/l-153r-ln0-420-xev',
        loadComponent: () => import('./catalogo-baterias/l-153r-ln0-420-xev/l-153r-ln0-420-xev').then(m => m.L153rLn0420XevComponent)
    },
    {
        path: 'catalogo-baterias/l-140r-ln1-570-xev',
        loadComponent: () => import('./catalogo-baterias/l-140r-ln1-570-xev/l-140r-ln1-570-xev').then(m => m.L140rLn1570XevComponent)
    },
    {
        path: 'catalogo-baterias/l-51jis-b24pp-410-xev',
        loadComponent: () => import('./catalogo-baterias/l-51jis-b24pp-410-xev/l-51jis-b24pp-410-xev').then(m => m.L51jisB24pp410XevComponent)
    },
    {
        path: 'catalogo-baterias/l-47-ln2-660-xev',
        loadComponent: () => import('./catalogo-baterias/l-47-ln2-660-xev/l-47-ln2-660-xev').then(m => m.L47Ln2660XevComponent)
    },
    {
        path: 'catalogo-baterias/l-51r-b24l-410-xev',
        loadComponent: () => import('./catalogo-baterias/l-51r-b24l-410-xev/l-51r-b24l-410-xev').then(m => m.L51rB24l410XevComponent)
    },

    // AGM
    {
        path: 'catalogo-baterias/l-35-650-agm',
        loadComponent: () => import('./catalogo-baterias/l-35-650-agm/l-35-650-agm').then(m => m.L35650AgmComponent)
    },
    {
        path: 'catalogo-baterias/l-24f-710-agm',
        loadComponent: () => import('./catalogo-baterias/l-24f-710-agm/l-24f-710-agm').then(m => m.L24f710AgmComponent)
    },
    {
        path: 'catalogo-baterias/l-65-750-agm',
        loadComponent: () => import('./catalogo-baterias/l-65-750-agm/l-65-750-agm').then(m => m.L65750AgmComponent)
    },
    {
        path: 'catalogo-baterias/l-47-ln2-660-agm',
        loadComponent: () => import('./catalogo-baterias/l-47-ln2-660-agm/l-47-ln2-660-agm').then(m => m.L47Ln2660AgmComponent)
    },
    {
        path: 'catalogo-baterias/l-94r-850-agm',
        loadComponent: () => import('./catalogo-baterias/l-94r-850-agm/l-94r-850-agm').then(m => m.L94r850AgmComponent)
    },
    {
        path: 'catalogo-baterias/l-48-91-760-agm',
        loadComponent: () => import('./catalogo-baterias/l-48-91-760-agm/l-48-91-760-agm').then(m => m.L4891760AgmComponent)
    },
    {
        path: 'catalogo-baterias/l-49-900-agm',
        loadComponent: () => import('./catalogo-baterias/l-49-900-agm/l-49-900-agm').then(m => m.L49900AgmComponent)
    },
    {
        path: 'catalogo-baterias/l-31t-825-agm',
        loadComponent: () => import('./catalogo-baterias/l-31t-825-agm/l-31t-825-agm').then(m => m.L31t825AgmComponent)
    },

    // =================================================================
    // 7. CATALOG: LTH SPECIALTY (Heavy Duty, Taxi, Marine, Golf, Garden)
    // =================================================================
    // Servicio Pesado (Heavy Duty)
    {
        path: 'producto/L-4-950-AR',
        loadComponent: () => import('./catalogo-baterias/l-4-950-ar/l-4-950-ar').then(m => m.L4950ArComponent)
    },
    {
        path: 'producto/L-31P-750-AR',
        loadComponent: () => import('./catalogo-baterias/l-31p-750-ar/l-31p-750-ar').then(m => m.L31p750ArComponent)
    },
    {
        path: 'producto/L-31T-750AR',
        loadComponent: () => import('./catalogo-baterias/l-31t-750-ar/l-31t-750-ar').then(m => m.L31t750ArComponent)
    },
    {
        path: 'producto/L-31P-900-AR',
        loadComponent: () => import('./catalogo-baterias/l-31p-900-ar/l-31p-900-ar').then(m => m.L31p900ArComponent)
    },
    {
        path: 'producto/L-31T-900-AR',
        loadComponent: () => import('./catalogo-baterias/l-31t-900-ar/l-31t-900-ar').then(m => m.L31t900ArComponent)
    },
    {
        path: 'producto/L-4DLT-1000',
        loadComponent: () => import('./catalogo-baterias/l-4dlt-1000/l-4dlt-1000').then(m => m.L4dlt1000Component)
    },
    {
        path: 'producto/L-4D-1000',
        loadComponent: () => import('./catalogo-baterias/l-4d-1000/l-4d-1000').then(m => m.L4d1000Component)
    },
    {
        path: 'producto/L-8D-1125-AR',
        loadComponent: () => import('./catalogo-baterias/l-8d-1125-ar/l-8d-1125-ar').then(m => m.L8d1125ArComponent)
    },
    {
        path: 'catalogo-baterias/l-31t-700-hd',
        loadComponent: () => import('./catalogo-baterias/l-31t-700-hd/l-31t-700-hd').then(m => m.L31t700HdComponent)
    },
    {
        path: 'catalogo-baterias/l-31t-950-hd',
        loadComponent: () => import('./catalogo-baterias/l-31t-950-hd/l-31t-950-hd').then(m => m.L31t950HdComponent)
    },
    {
        path: 'catalogo-baterias/l-4dm-1300-hd',
        loadComponent: () => import('./catalogo-baterias/l-4dm-1300-hd/l-4dm-1300-hd').then(m => m.L4dm1300HdComponent)
    },
    {
        path: 'catalogo-baterias/l-8d-1400-hd',
        loadComponent: () => import('./catalogo-baterias/l-8d-1400-hd/l-8d-1400-hd').then(m => m.L8d1400HdComponent)
    },

    // Taxi
    {
        path: 'catalogo-baterias/ltx-22f-600',
        loadComponent: () => import('./catalogo-baterias/ltx-22f-600/ltx-22f-600').then(m => m.Ltx22f600Component)
    },
    {
        path: 'catalogo-baterias/ltx-35-600',
        loadComponent: () => import('./catalogo-baterias/ltx-35-600/ltx-35-600').then(m => m.Ltx35600Component)
    },
    {
        path: 'catalogo-baterias/ltx-47-ln2-625',
        loadComponent: () => import('./catalogo-baterias/ltx-47-ln2-625/ltx-47-ln2-625').then(m => m.Ltx47Ln2625Component)
    },

    // Solar
    {
        path: 'catalogo-baterias/l-31t-s-190m',
        loadComponent: () => import('./catalogo-baterias/l-31t-s-190m/l-31t-s-190m').then(m => m.L31tS190mComponent)
    },

    // Golf
    {
        path: 'catalogo-baterias/l-gc2-101',
        loadComponent: () => import('./catalogo-baterias/l-gc2-101/l-gc2-101').then(m => m.LGc2101Component)
    },
    {
        path: 'catalogo-baterias/l-gc2-115',
        loadComponent: () => import('./catalogo-baterias/l-gc2-115/l-gc2-115').then(m => m.LGc2115Component)
    },
    {
        path: 'catalogo-baterias/l-gc8-110',
        loadComponent: () => import('./catalogo-baterias/l-gc8-110/l-gc8-110').then(m => m.LGc8110Component)
    },

    // Podadora
    {
        path: 'catalogo-baterias/l-u1-340',
        loadComponent: () => import('./catalogo-baterias/l-u1-340/l-u1-340').then(m => m.LU1340Component)
    },

    // Marina
    {
        path: 'catalogo-baterias/l-24m-500',
        loadComponent: () => import('./catalogo-baterias/l-24m-500/l-24m-500').then(m => m.L24m500Component)
    },
    {
        path: 'catalogo-baterias/l-24mdc-140',
        loadComponent: () => import('./catalogo-baterias/l-24mdc-140/l-24mdc-140').then(m => m.L24mdc140Component)
    },
    {
        path: 'catalogo-baterias/l-27mdc-160',
        loadComponent: () => import('./catalogo-baterias/l-27mdc-160/l-27mdc-160').then(m => m.L27mdc160Component)
    },
    {
        path: 'catalogo-baterias/l-29dc-210',
        loadComponent: () => import('./catalogo-baterias/l-29dc-210/l-29dc-210').then(m => m.L29dc210Component)
    },
    {
        path: 'catalogo-baterias/l-4dm-390m',
        loadComponent: () => import('./catalogo-baterias/l-4dm-390m/l-4dm-390m').then(m => m.L4dm390mComponent)
    },

    // =================================================================
    // 8. CATALOG: AMERICA (AM-Series)
    // =================================================================
    {
        path: 'catalogo-baterias/AM-22F-450',
        loadComponent: () => import('./catalogo-baterias/am-22f-450/am-22f-450').then(m => m.Am22f450Component)
    },
    {
        path: 'catalogo-baterias/AM-42-400',
        loadComponent: () => import('./catalogo-baterias/am-42-400/am-42-400').then(m => m.Am42400Component)
    },
    {
        path: 'catalogo-baterias/AM-26R-500',
        loadComponent: () => import('./catalogo-baterias/am-26r-500/am-26r-500').then(m => m.Am26r500Component)
    },
    {
        path: 'catalogo-baterias/AM-58-575',
        loadComponent: () => import('./catalogo-baterias/am-58-575/am-58-575').then(m => m.Am58575Component)
    },
    {
        path: 'catalogo-baterias/AM-NS-40-320',
        loadComponent: () => import('./catalogo-baterias/am-ns-40-320/am-ns-40-320').then(m => m.AmNs40320Component)
    },
    {
        path: 'catalogo-baterias/AM-NS40Z-320',
        loadComponent: () => import('./catalogo-baterias/am-ns40z-320/am-ns40z-320').then(m => m.AmNs40z320Component)
    },
    {
        path: 'catalogo-baterias/AM-44B19-335',
        loadComponent: () => import('./catalogo-baterias/am-44b19-335/am-44b19-335').then(m => m.Am44b19335Component)
    },
    {
        path: 'catalogo-baterias/AM-99-390',
        loadComponent: () => import('./catalogo-baterias/am-99-390/am-99-390').then(m => m.Am99390Component)
    },
    {
        path: 'catalogo-baterias/AM-24-420',
        loadComponent: () => import('./catalogo-baterias/am-24-420/am-24-420').then(m => m.Am24420Component)
    },
    {
        path: 'catalogo-baterias/AM-42-500',
        loadComponent: () => import('./catalogo-baterias/am-42-500/am-42-500').then(m => m.Am42500Component)
    },
    {
        path: 'catalogo-baterias/AM-35-550',
        loadComponent: () => import('./catalogo-baterias/am-35-550/am-35-550').then(m => m.Am35550Component)
    },
    {
        path: 'catalogo-baterias/AM-24R-530',
        loadComponent: () => import('./catalogo-baterias/am-24r-530/am-24r-530').then(m => m.Am24r530Component)
    },
    {
        path: 'catalogo-baterias/AM-75-550',
        loadComponent: () => import('./catalogo-baterias/am-75-550/am-75-550').then(m => m.Am75550Component)
    },
    {
        path: 'catalogo-baterias/AM-42R-500',
        loadComponent: () => import('./catalogo-baterias/am-42r-500/am-42r-500').then(m => m.Am42r500Component)
    },
    {
        path: 'catalogo-baterias/AM-51R-500',
        loadComponent: () => import('./catalogo-baterias/am-51r-500/am-51r-500').then(m => m.Am51r500Component)
    },
    {
        path: 'catalogo-baterias/AM-51-500',
        loadComponent: () => import('./catalogo-baterias/am-51-500/am-51-500').then(m => m.Am51500Component)
    },
    {
        path: 'catalogo-baterias/AM-65-800',
        loadComponent: () => import('./catalogo-baterias/am-65-800/am-65-800').then(m => m.Am65800Component)
    },
    {
        path: 'catalogo-baterias/AM-75-86-650',
        loadComponent: () => import('./catalogo-baterias/am-75-86-650/am-75-86-650').then(m => m.Am7586650Component)
    },
    {
        path: 'catalogo-baterias/AM-34-600',
        loadComponent: () => import('./catalogo-baterias/am-34-600/am-34-600').then(m => m.Am34600Component)
    },
    {
        path: 'catalogo-baterias/AM-41-650',
        loadComponent: () => import('./catalogo-baterias/am-41-650/am-41-650').then(m => m.Am41650Component)
    },
    {
        path: 'catalogo-baterias/AM-47(LN2)-550',
        loadComponent: () => import('./catalogo-baterias/am-47-ln2-550/am-47-ln2-550').then(m => m.Am47Ln2550Component)
    },
    {
        path: 'catalogo-baterias/AM-58R-575',
        loadComponent: () => import('./catalogo-baterias/am-58r-575/am-58r-575').then(m => m.Am58r575Component)
    },
    {
        path: 'catalogo-baterias/AM-27F-520',
        loadComponent: () => import('./catalogo-baterias/am-27f-520/am-27f-520').then(m => m.Am27f520Component)
    },
    {
        path: 'catalogo-baterias/AM-34-78-750',
        loadComponent: () => import('./catalogo-baterias/am-34-78-750/am-34-78-750').then(m => m.Am3478750Component)
    },
    {
        path: 'catalogo-baterias/AM-48-91(LN3)-615',
        loadComponent: () => import('./catalogo-baterias/am-48-91-ln3-615/am-48-91-ln3-615').then(m => m.Am4891Ln3615Component)
    },
    {
        path: 'catalogo-baterias/AM-27-700',
        loadComponent: () => import('./catalogo-baterias/am-27-700/am-27-700').then(m => m.Am27700Component)
    },
    {
        path: 'catalogo-baterias/AM-94R-800',
        loadComponent: () => import('./catalogo-baterias/am-94r-800/am-94r-800').then(m => m.Am94r800Component)
    },
    {
        path: 'catalogo-baterias/AM-30H-670',
        loadComponent: () => import('./catalogo-baterias/am-30h-670/am-30h-670').then(m => m.Am30h670Component)
    },
    {
        path: 'catalogo-baterias/AM-31T-750-AR',
        loadComponent: () => import('./catalogo-baterias/am-31t-750-ar/am-31t-750-ar').then(m => m.Am31t750ArComponent)
    },
    {
        path: 'catalogo-baterias/AM-31P-750-AR',
        loadComponent: () => import('./catalogo-baterias/am-31p-750-ar/am-31p-750-ar').then(m => m.Am31p750ArComponent)
    },
    {
        path: 'catalogo-baterias/AM-31T-900-AR',
        loadComponent: () => import('./catalogo-baterias/am-31t-900-ar/am-31t-900-ar').then(m => m.Am31t900ArComponent)
    },
    {
        path: 'catalogo-baterias/AM-4DLT-1000',
        loadComponent: () => import('./catalogo-baterias/am-4dlt-1000/am-4dlt-1000').then(m => m.Am4dlt1000Component)
    },
    {
        path: 'catalogo-baterias/AM-8D-1125-AR',
        loadComponent: () => import('./catalogo-baterias/am-8d-1125-ar/am-8d-1125-ar').then(m => m.Am8d1125ArComponent)
    },

    // =================================================================
    // 9. CATALOG: H-SERIES (H-...)
    // =================================================================
    {
        path: 'catalogo-baterias/H-22F-550',
        loadComponent: () => import('./catalogo-baterias/h-22f-550/h-22f-550').then(m => m.H22f550Component)
    },
    {
        path: 'catalogo-baterias/H-26R-500',
        loadComponent: () => import('./catalogo-baterias/h-26r-500/h-26r-500').then(m => m.H26r500Component)
    },
    {
        path: 'catalogo-baterias/H-58-650',
        loadComponent: () => import('./catalogo-baterias/h-58-650/h-58-650').then(m => m.H58650Component)
    },
    {
        path: 'catalogo-baterias/H-99(LBN1)-470',
        loadComponent: () => import('./catalogo-baterias/h-99-lbn1-470/h-99-lbn1-470').then(m => m.H99Lbn1470Component)
    },
    {
        path: 'catalogo-baterias/H-24-600',
        loadComponent: () => import('./catalogo-baterias/h-24-600/h-24-600').then(m => m.H24600Component)
    },
    {
        path: 'catalogo-baterias/H-42-550',
        loadComponent: () => import('./catalogo-baterias/h-42-550/h-42-550').then(m => m.H42550Component)
    },
    {
        path: 'catalogo-baterias/H-35-585',
        loadComponent: () => import('./catalogo-baterias/h-35-585/h-35-585').then(m => m.H35585Component)
    },
    {
        path: 'catalogo-baterias/H-24R-600',
        loadComponent: () => import('./catalogo-baterias/h-24r-600/h-24r-600').then(m => m.H24r600Component)
    },
    {
        path: 'catalogo-baterias/H-75-650',
        loadComponent: () => import('./catalogo-baterias/h-75-650/h-75-650').then(m => m.H75650Component)
    },
    {
        path: 'catalogo-baterias/H-65-850',
        loadComponent: () => import('./catalogo-baterias/h-65-850/h-65-850').then(m => m.H65850Component)
    },
    {
        path: 'catalogo-baterias/H-34-650',
        loadComponent: () => import('./catalogo-baterias/h-34-650/h-34-650').then(m => m.H34650Component)
    },
    {
        path: 'catalogo-baterias/H-41-750',
        loadComponent: () => import('./catalogo-baterias/h-41-750/h-41-750').then(m => m.H41750Component)
    },
    {
        path: 'catalogo-baterias/H-75-86-700',
        loadComponent: () => import('./catalogo-baterias/h-75-86-700/h-75-86-700').then(m => m.H7586700Component)
    },
    {
        path: 'catalogo-baterias/H-47(LN2)-600',
        loadComponent: () => import('./catalogo-baterias/h-47-ln2-600/h-47-ln2-600').then(m => m.H47Ln2600Component)
    },
    {
        path: 'catalogo-baterias/H-27F-810',
        loadComponent: () => import('./catalogo-baterias/h-27f-810/h-27f-810').then(m => m.H27f810Component)
    },
    {
        path: 'catalogo-baterias/H-34-78-800',
        loadComponent: () => import('./catalogo-baterias/h-34-78-800/h-34-78-800').then(m => m.H3478800Component)
    },
    {
        path: 'catalogo-baterias/H-48-91(LN3)-730',
        loadComponent: () => import('./catalogo-baterias/h-48-91-ln3-730/h-48-91-ln3-730').then(m => m.H4891Ln3730Component)
    },
    {
        path: 'catalogo-baterias/H-78-800',
        loadComponent: () => import('./catalogo-baterias/h-78-800/h-78-800').then(m => m.H78800Component)
    },
    {
        path: 'catalogo-baterias/H-49(LN5)-850',
        loadComponent: () => import('./catalogo-baterias/h-49-ln5-850/h-49-ln5-850').then(m => m.H49Ln5850Component)
    },
    {
        path: 'catalogo-baterias/H-27-810',
        loadComponent: () => import('./catalogo-baterias/h-27-810/h-27-810').then(m => m.H27810Component)
    },

    // =================================================================
    // 10. CATALOG: MOTO (AGM Only)
    // =================================================================
    {
        path: 'catalogo-moto-baterias/AGM/TX4L-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx4l-bs/tx4l-bs').then(m => m.Tx4lBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TX5L-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx5l-bs/tx5l-bs').then(m => m.Tx5lBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TX6.5L-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx6-5l-bs/tx6-5l-bs').then(m => m.Tx65lBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TX7A-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx7a-bs/tx7a-bs').then(m => m.Tx7aBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TX7L-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx7l-bs/tx7l-bs').then(m => m.Tx7lBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TX9-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx9-bs/tx9-bs').then(m => m.Tx9BsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/T7B-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/t7b-bs/t7b-bs').then(m => m.T7bBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/T9B-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/t9b-bs/t9b-bs').then(m => m.T9bBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/T12B-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/t12b-bs/t12b-bs').then(m => m.T12bBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TZ10S-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tz10s-bs/tz10s-bs').then(m => m.Tz10sBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/7-A',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/7-a/7-a').then(m => m.SevenAComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TX14-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx14-bs/tx14-bs').then(m => m.Tx14BsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TX12-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx12-bs/tx12-bs').then(m => m.Tx12BsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TX14AH-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx14ah-bs/tx14ah-bs').then(m => m.Tx14ahBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TX14AHL-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx14ahl-bs/tx14ahl-bs').then(m => m.Tx14ahlBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/T14B-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/t14b-bs/t14b-bs').then(m => m.T14bBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TX20HL-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx20hl-bs/tx20hl-bs').then(m => m.Tx20hlBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TX20CH-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx20ch-bs/tx20ch-bs').then(m => m.Tx20chBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TX24HL-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx24hl-bs/tx24hl-bs').then(m => m.Tx24hlBsComponent)
    },
    {
        path: 'catalogo-moto-baterias/AGM/TX30L-BS',
        loadComponent: () => import('./catalogo-moto-baterias/AGM-Libre-Mantenimiento/tx30l-bs/tx30l-bs').then(m => m.Tx30lBsComponent)
    },

    // =================================================================
    // 11. CATALOG: MOTO (Conventional)
    // =================================================================
    {
        path: 'catalogo-moto-baterias/convencional/12N5-3B',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/12n5-3b/12n5-3b').then(m => m.TwelveN53bComponent)
    },
    {
        path: 'catalogo-moto-baterias/convencional/12N7B-3A',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/12n7b-3a/12n7b-3a').then(m => m.TwelveN7b3aComponent)
    },
    {
        path: 'catalogo-moto-baterias/convencional/12N7-3B',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/12n7-3b/12n7-3b').then(m => m.TwelveN73bComponent)
    },
    {
        path: 'catalogo-moto-baterias/convencional/12N9-4B-1',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/12n9-4b-1/12n9-4b-1').then(m => m.TwelveN94b1Component)
    },
    {
        path: 'catalogo-moto-baterias/convencional/12N10-3B',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/12n10-3b/12n10-3b').then(m => m.TwelveN103bComponent)
    },
    {
        path: 'catalogo-moto-baterias/convencional/12N12A-4A-1',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/12n12a-4a-1/12n12a-4a-1').then(m => m.TwelveN12a4a1Component)
    },
    {
        path: 'catalogo-moto-baterias/convencional/12N14-3A',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/12n14-3a/12n14-3a').then(m => m.TwelveN143aComponent)
    },
    {
        path: 'catalogo-moto-baterias/convencional/4L-B',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/4l-b/4l-b').then(m => m.FourLbComponent)
    },
    {
        path: 'catalogo-moto-baterias/convencional/5L-B',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/5l-b/5l-b').then(m => m.FiveLbComponent)
    },
    {
        path: 'catalogo-moto-baterias/convencional/6.5L-B',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/6.5l-b/6.5l-b').then(m => m.SixPointFiveLbComponent)
    },
    {
        path: 'catalogo-moto-baterias/convencional/7-A',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/7-a/7-a').then(m => m.SevenAComponent)
    },
    {
        path: 'catalogo-moto-baterias/convencional/9-B',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/9-b/9-b').then(m => m.NineBComponent)
    },
    {
        path: 'catalogo-moto-baterias/convencional/12A-A',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/12a-a/12a-a').then(m => m.TwelveAAComponent)
    },
    {
        path: 'catalogo-moto-baterias/convencional/14L-A2',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/14l-a2/14l-a2').then(m => m.FourteenLA2Component)
    },
    {
        path: 'catalogo-moto-baterias/convencional/16CL-B',
        loadComponent: () => import('./catalogo-moto-baterias/Baterias-Convencionales/16cl-b/16cl-b').then(m => m.SixteenCLBComponent)
    },

    // =================================================================
    // 12. CATALOG: AUXILIARY (AUX Series)
    // =================================================================
    {
        path: 'catalogo-baterias/aux12',
        loadComponent: () => import('./catalogo-baterias/aux12/aux12').then(m => m.Aux12Component)
    },
    {
        path: 'catalogo-baterias/aux14',
        loadComponent: () => import('./catalogo-baterias/aux14/aux14').then(m => m.Aux14Component)
    },

    // =================================================================
    // 13. WILDCARDS & 404
    // =================================================================
    {
        path: 'contacto',
        loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFoundComponent)
    },
    // Cualquier ruta no encontrada
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFoundComponent)
    }
];
