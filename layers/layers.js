ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:20137").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Dewelkebele_1 = new ol.format.GeoJSON();
var features_Dewelkebele_1 = format_Dewelkebele_1.readFeatures(json_Dewelkebele_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_Dewelkebele_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dewelkebele_1.addFeatures(features_Dewelkebele_1);
var lyr_Dewelkebele_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dewelkebele_1, 
                style: style_Dewelkebele_1,
                popuplayertitle: "Dewel kebele",
                interactive: true,
                title: '<img src="styles/legend/Dewelkebele_1.png" /> Dewel kebele'
            });
var format_BoroKebele_2 = new ol.format.GeoJSON();
var features_BoroKebele_2 = format_BoroKebele_2.readFeatures(json_BoroKebele_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_BoroKebele_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoroKebele_2.addFeatures(features_BoroKebele_2);
var lyr_BoroKebele_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoroKebele_2, 
                style: style_BoroKebele_2,
                popuplayertitle: "Boro Kebele",
                interactive: true,
                title: '<img src="styles/legend/BoroKebele_2.png" /> Boro Kebele'
            });
var format_Genakebele_3 = new ol.format.GeoJSON();
var features_Genakebele_3 = format_Genakebele_3.readFeatures(json_Genakebele_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_Genakebele_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Genakebele_3.addFeatures(features_Genakebele_3);
var lyr_Genakebele_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Genakebele_3, 
                style: style_Genakebele_3,
                popuplayertitle: "Gena kebele",
                interactive: true,
                title: '<img src="styles/legend/Genakebele_3.png" /> Gena kebele'
            });
var format_Medebgubdakebele_4 = new ol.format.GeoJSON();
var features_Medebgubdakebele_4 = format_Medebgubdakebele_4.readFeatures(json_Medebgubdakebele_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_Medebgubdakebele_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Medebgubdakebele_4.addFeatures(features_Medebgubdakebele_4);
var lyr_Medebgubdakebele_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Medebgubdakebele_4, 
                style: style_Medebgubdakebele_4,
                popuplayertitle: "Medebgubda kebele",
                interactive: true,
                title: '<img src="styles/legend/Medebgubdakebele_4.png" /> Medebgubda kebele'
            });
var format_Serawdikebele_5 = new ol.format.GeoJSON();
var features_Serawdikebele_5 = format_Serawdikebele_5.readFeatures(json_Serawdikebele_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_Serawdikebele_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Serawdikebele_5.addFeatures(features_Serawdikebele_5);
var lyr_Serawdikebele_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Serawdikebele_5, 
                style: style_Serawdikebele_5,
                popuplayertitle: "Serawdi kebele",
                interactive: true,
                title: '<img src="styles/legend/Serawdikebele_5.png" /> Serawdi kebele'
            });
var format_Kuharkebele_6 = new ol.format.GeoJSON();
var features_Kuharkebele_6 = format_Kuharkebele_6.readFeatures(json_Kuharkebele_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_Kuharkebele_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuharkebele_6.addFeatures(features_Kuharkebele_6);
var lyr_Kuharkebele_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuharkebele_6, 
                style: style_Kuharkebele_6,
                popuplayertitle: "Kuhar kebele",
                interactive: true,
                title: '<img src="styles/legend/Kuharkebele_6.png" /> Kuhar kebele'
            });
var format_Wageterakebele_7 = new ol.format.GeoJSON();
var features_Wageterakebele_7 = format_Wageterakebele_7.readFeatures(json_Wageterakebele_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_Wageterakebele_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wageterakebele_7.addFeatures(features_Wageterakebele_7);
var lyr_Wageterakebele_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wageterakebele_7, 
                style: style_Wageterakebele_7,
                popuplayertitle: "Wagetera kebele",
                interactive: true,
                title: '<img src="styles/legend/Wageterakebele_7.png" /> Wagetera kebele'
            });
var format_Geregrakebele_8 = new ol.format.GeoJSON();
var features_Geregrakebele_8 = format_Geregrakebele_8.readFeatures(json_Geregrakebele_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_Geregrakebele_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geregrakebele_8.addFeatures(features_Geregrakebele_8);
var lyr_Geregrakebele_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geregrakebele_8, 
                style: style_Geregrakebele_8,
                popuplayertitle: "Geregra kebele",
                interactive: true,
                title: '<img src="styles/legend/Geregrakebele_8.png" /> Geregra kebele'
            });
var format_Girbikebele_9 = new ol.format.GeoJSON();
var features_Girbikebele_9 = format_Girbikebele_9.readFeatures(json_Girbikebele_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_Girbikebele_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Girbikebele_9.addFeatures(features_Girbikebele_9);
var lyr_Girbikebele_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Girbikebele_9, 
                style: style_Girbikebele_9,
                popuplayertitle: "Girbi kebele",
                interactive: true,
                title: '<img src="styles/legend/Girbikebele_9.png" /> Girbi kebele'
            });
var format_MTsionkebele_10 = new ol.format.GeoJSON();
var features_MTsionkebele_10 = format_MTsionkebele_10.readFeatures(json_MTsionkebele_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_MTsionkebele_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTsionkebele_10.addFeatures(features_MTsionkebele_10);
var lyr_MTsionkebele_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTsionkebele_10, 
                style: style_MTsionkebele_10,
                popuplayertitle: "M/Tsion kebele",
                interactive: true,
                title: '<img src="styles/legend/MTsionkebele_10.png" /> M/Tsion kebele'
            });
var format_Tibagakebele_11 = new ol.format.GeoJSON();
var features_Tibagakebele_11 = format_Tibagakebele_11.readFeatures(json_Tibagakebele_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_Tibagakebele_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tibagakebele_11.addFeatures(features_Tibagakebele_11);
var lyr_Tibagakebele_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tibagakebele_11, 
                style: style_Tibagakebele_11,
                popuplayertitle: "Tibaga kebele",
                interactive: true,
                title: '<img src="styles/legend/Tibagakebele_11.png" /> Tibaga kebele'
            });
var format_WowamageraKebele_12 = new ol.format.GeoJSON();
var features_WowamageraKebele_12 = format_WowamageraKebele_12.readFeatures(json_WowamageraKebele_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_WowamageraKebele_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WowamageraKebele_12.addFeatures(features_WowamageraKebele_12);
var lyr_WowamageraKebele_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WowamageraKebele_12, 
                style: style_WowamageraKebele_12,
                popuplayertitle: "Wowamagera Kebele",
                interactive: true,
                title: '<img src="styles/legend/WowamageraKebele_12.png" /> Wowamagera Kebele'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Dewelkebele_1.setVisible(true);lyr_BoroKebele_2.setVisible(true);lyr_Genakebele_3.setVisible(true);lyr_Medebgubdakebele_4.setVisible(true);lyr_Serawdikebele_5.setVisible(true);lyr_Kuharkebele_6.setVisible(true);lyr_Wageterakebele_7.setVisible(true);lyr_Geregrakebele_8.setVisible(true);lyr_Girbikebele_9.setVisible(true);lyr_MTsionkebele_10.setVisible(true);lyr_Tibagakebele_11.setVisible(true);lyr_WowamageraKebele_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Dewelkebele_1,lyr_BoroKebele_2,lyr_Genakebele_3,lyr_Medebgubdakebele_4,lyr_Serawdikebele_5,lyr_Kuharkebele_6,lyr_Wageterakebele_7,lyr_Geregrakebele_8,lyr_Girbikebele_9,lyr_MTsionkebele_10,lyr_Tibagakebele_11,lyr_WowamageraKebele_12];
lyr_Dewelkebele_1.set('fieldAliases', {'Region': 'Region', 'Zone': 'Zone', 'Woreda': 'Woreda', 'Kebele': 'Kebele', 'Block_No': 'Block_No', 'LUT_Code': 'LUT_Code', 'Area': 'Area', 'LU_Type': 'LU_Type', });
lyr_BoroKebele_2.set('fieldAliases', {'Id': 'Id', 'land_use_t': 'land_use_t', 'code': 'code', });
lyr_Genakebele_3.set('fieldAliases', {'Id': 'Id', 'Land_use_T': 'Land_use_T', 'LUT': 'LUT', });
lyr_Medebgubdakebele_4.set('fieldAliases', {'Id': 'Id', 'LANDUSE': 'LANDUSE', });
lyr_Serawdikebele_5.set('fieldAliases', {'area_ha': 'area_ha', 'land_use': 'land_use', 'region': 'region', 'zone_': 'zone_', 'woreda': 'woreda', 'kebelle': 'kebelle', 'id': 'id', 'LU_TYPE': 'LU_TYPE', });
lyr_Kuharkebele_6.set('fieldAliases', {'Block_Numb': 'Block_Numb', 'Id_Number': 'Id_Number', 'Block_Nu_1': 'Block_Nu_1', 'Plan_Use': 'Plan_Use', 'Area': 'Area', 'X_Coordina': 'X_Coordina', 'Y_Coordina': 'Y_Coordina', });
lyr_Wageterakebele_7.set('fieldAliases', {'Id': 'Id', 'Region': 'Region', 'Zone': 'Zone', 'Woreda': 'Woreda', 'Block_no': 'Block_no', 'LUT_type': 'LUT_type', 'LUT_code': 'LUT_code', 'Area': 'Area', 'Kebele': 'Kebele', });
lyr_Geregrakebele_8.set('fieldAliases', {'Region': 'Region', 'Zone': 'Zone', 'Woreda': 'Woreda', 'Block_No': 'Block_No', 'LUT_Code': 'LUT_Code', 'Area': 'Area', 'LU_Type': 'LU_Type', 'Kebele': 'Kebele', });
lyr_Girbikebele_9.set('fieldAliases', {'Region': 'Region', 'Zone': 'Zone', 'Woreda': 'Woreda', 'Kebele': 'Kebele', 'Area': 'Area', 'LU_TYPE': 'LU_TYPE', 'LU_CODE': 'LU_CODE', });
lyr_MTsionkebele_10.set('fieldAliases', {'Id': 'Id', 'Rigion': 'Rigion', 'Zone': 'Zone', 'Kebele': 'Kebele', 'Area': 'Area', 'Woreda': 'Woreda', 'BLOAK_COD': 'BLOAK_COD', 'Bloak_P': 'Bloak_P', });
lyr_Tibagakebele_11.set('fieldAliases', {'Id': 'Id', 'Region': 'Region', 'Zone': 'Zone', 'Woreda': 'Woreda', 'Kebele': 'Kebele', 'LU_Type': 'LU_Type', 'LUT_Code': 'LUT_Code', 'Area': 'Area', 'LUT': 'LUT', });
lyr_WowamageraKebele_12.set('fieldAliases', {'Id': 'Id', 'RIGION': 'RIGION', 'zone': 'zone', 'woreda': 'woreda', 'kebele': 'kebele', 'bloack_cod': 'bloack_cod', 'area': 'area', 'bloack_Hou': 'bloack_Hou', });
lyr_Dewelkebele_1.set('fieldImages', {'Region': 'TextEdit', 'Zone': 'TextEdit', 'Woreda': 'TextEdit', 'Kebele': 'TextEdit', 'Block_No': 'TextEdit', 'LUT_Code': 'TextEdit', 'Area': 'TextEdit', 'LU_Type': 'TextEdit', });
lyr_BoroKebele_2.set('fieldImages', {'Id': 'Range', 'land_use_t': 'TextEdit', 'code': 'TextEdit', });
lyr_Genakebele_3.set('fieldImages', {'Id': 'Range', 'Land_use_T': 'TextEdit', 'LUT': 'TextEdit', });
lyr_Medebgubdakebele_4.set('fieldImages', {'Id': 'Range', 'LANDUSE': 'TextEdit', });
lyr_Serawdikebele_5.set('fieldImages', {'area_ha': 'TextEdit', 'land_use': 'TextEdit', 'region': 'TextEdit', 'zone_': 'TextEdit', 'woreda': 'TextEdit', 'kebelle': 'TextEdit', 'id': 'TextEdit', 'LU_TYPE': 'TextEdit', });
lyr_Kuharkebele_6.set('fieldImages', {'Block_Numb': 'TextEdit', 'Id_Number': 'TextEdit', 'Block_Nu_1': 'TextEdit', 'Plan_Use': 'TextEdit', 'Area': 'TextEdit', 'X_Coordina': 'TextEdit', 'Y_Coordina': 'TextEdit', });
lyr_Wageterakebele_7.set('fieldImages', {'Id': 'Range', 'Region': 'TextEdit', 'Zone': 'TextEdit', 'Woreda': 'TextEdit', 'Block_no': 'TextEdit', 'LUT_type': 'TextEdit', 'LUT_code': 'TextEdit', 'Area': 'TextEdit', 'Kebele': 'TextEdit', });
lyr_Geregrakebele_8.set('fieldImages', {'Region': 'TextEdit', 'Zone': 'TextEdit', 'Woreda': 'TextEdit', 'Block_No': 'TextEdit', 'LUT_Code': 'TextEdit', 'Area': 'TextEdit', 'LU_Type': 'TextEdit', 'Kebele': 'TextEdit', });
lyr_Girbikebele_9.set('fieldImages', {'Region': 'TextEdit', 'Zone': 'TextEdit', 'Woreda': 'TextEdit', 'Kebele': 'TextEdit', 'Area': 'TextEdit', 'LU_TYPE': 'TextEdit', 'LU_CODE': 'TextEdit', });
lyr_MTsionkebele_10.set('fieldImages', {'Id': 'Range', 'Rigion': 'TextEdit', 'Zone': 'TextEdit', 'Kebele': 'TextEdit', 'Area': 'TextEdit', 'Woreda': 'TextEdit', 'BLOAK_COD': 'TextEdit', 'Bloak_P': 'TextEdit', });
lyr_Tibagakebele_11.set('fieldImages', {'Id': 'Range', 'Region': 'TextEdit', 'Zone': 'TextEdit', 'Woreda': 'TextEdit', 'Kebele': 'TextEdit', 'LU_Type': 'TextEdit', 'LUT_Code': 'TextEdit', 'Area': 'TextEdit', 'LUT': 'TextEdit', });
lyr_WowamageraKebele_12.set('fieldImages', {'Id': 'Range', 'RIGION': 'TextEdit', 'zone': 'TextEdit', 'woreda': 'TextEdit', 'kebele': 'TextEdit', 'bloack_cod': 'TextEdit', 'area': 'TextEdit', 'bloack_Hou': 'TextEdit', });
lyr_Dewelkebele_1.set('fieldLabels', {'Region': 'inline label - always visible', 'Zone': 'inline label - always visible', 'Woreda': 'inline label - always visible', 'Kebele': 'inline label - always visible', 'Block_No': 'inline label - always visible', 'LUT_Code': 'inline label - always visible', 'Area': 'inline label - always visible', 'LU_Type': 'inline label - always visible', });
lyr_BoroKebele_2.set('fieldLabels', {'Id': 'hidden field', 'land_use_t': 'inline label - always visible', 'code': 'inline label - always visible', });
lyr_Genakebele_3.set('fieldLabels', {'Id': 'hidden field', 'Land_use_T': 'inline label - always visible', 'LUT': 'inline label - always visible', });
lyr_Medebgubdakebele_4.set('fieldLabels', {'Id': 'hidden field', 'LANDUSE': 'inline label - always visible', });
lyr_Serawdikebele_5.set('fieldLabels', {'area_ha': 'inline label - always visible', 'land_use': 'inline label - always visible', 'region': 'inline label - always visible', 'zone_': 'inline label - always visible', 'woreda': 'inline label - always visible', 'kebelle': 'inline label - always visible', 'id': 'hidden field', 'LU_TYPE': 'inline label - always visible', });
lyr_Kuharkebele_6.set('fieldLabels', {'Block_Numb': 'hidden field', 'Id_Number': 'hidden field', 'Block_Nu_1': 'hidden field', 'Plan_Use': 'inline label - always visible', 'Area': 'inline label - always visible', 'X_Coordina': 'hidden field', 'Y_Coordina': 'hidden field', });
lyr_Wageterakebele_7.set('fieldLabels', {'Id': 'hidden field', 'Region': 'inline label - always visible', 'Zone': 'inline label - always visible', 'Woreda': 'inline label - always visible', 'Block_no': 'inline label - always visible', 'LUT_type': 'inline label - always visible', 'LUT_code': 'inline label - always visible', 'Area': 'inline label - always visible', 'Kebele': 'inline label - always visible', });
lyr_Geregrakebele_8.set('fieldLabels', {'Region': 'inline label - always visible', 'Zone': 'inline label - always visible', 'Woreda': 'inline label - always visible', 'Block_No': 'inline label - always visible', 'LUT_Code': 'inline label - always visible', 'Area': 'inline label - always visible', 'LU_Type': 'inline label - always visible', 'Kebele': 'inline label - always visible', });
lyr_Girbikebele_9.set('fieldLabels', {'Region': 'inline label - always visible', 'Zone': 'inline label - always visible', 'Woreda': 'inline label - always visible', 'Kebele': 'inline label - always visible', 'Area': 'inline label - always visible', 'LU_TYPE': 'inline label - always visible', 'LU_CODE': 'inline label - always visible', });
lyr_MTsionkebele_10.set('fieldLabels', {'Id': 'hidden field', 'Rigion': 'inline label - always visible', 'Zone': 'inline label - always visible', 'Kebele': 'inline label - always visible', 'Area': 'inline label - always visible', 'Woreda': 'inline label - always visible', 'BLOAK_COD': 'inline label - always visible', 'Bloak_P': 'inline label - always visible', });
lyr_Tibagakebele_11.set('fieldLabels', {'Id': 'hidden field', 'Region': 'inline label - always visible', 'Zone': 'inline label - always visible', 'Woreda': 'inline label - always visible', 'Kebele': 'inline label - always visible', 'LU_Type': 'inline label - always visible', 'LUT_Code': 'inline label - always visible', 'Area': 'inline label - always visible', 'LUT': 'inline label - always visible', });
lyr_WowamageraKebele_12.set('fieldLabels', {'Id': 'hidden field', 'RIGION': 'inline label - always visible', 'zone': 'inline label - always visible', 'woreda': 'inline label - always visible', 'kebele': 'inline label - always visible', 'bloack_cod': 'hidden field', 'area': 'inline label - always visible', 'bloack_Hou': 'inline label - always visible', });
lyr_WowamageraKebele_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});