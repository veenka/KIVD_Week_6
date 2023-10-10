var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdministrasiKecamatan_1 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_1 = format_BatasAdministrasiKecamatan_1.readFeatures(json_BatasAdministrasiKecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatan_1.addFeatures(features_BatasAdministrasiKecamatan_1);
var lyr_BatasAdministrasiKecamatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasiKecamatan_1, 
                style: style_BatasAdministrasiKecamatan_1,
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKecamatan_1.png" /> Batas Administrasi Kecamatan'
            });
var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);
var lyr_Sungai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_2, 
                style: style_Sungai_2,
                interactive: true,
                title: '<img src="styles/legend/Sungai_2.png" /> Sungai'
            });
var format_KantorPos_3 = new ol.format.GeoJSON();
var features_KantorPos_3 = format_KantorPos_3.readFeatures(json_KantorPos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorPos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorPos_3.addFeatures(features_KantorPos_3);
var lyr_KantorPos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KantorPos_3, 
                style: style_KantorPos_3,
                interactive: true,
                title: '<img src="styles/legend/KantorPos_3.png" /> Kantor Pos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BatasAdministrasiKecamatan_1.setVisible(true);lyr_Sungai_2.setVisible(true);lyr_KantorPos_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BatasAdministrasiKecamatan_1,lyr_Sungai_2,lyr_KantorPos_3];
lyr_BatasAdministrasiKecamatan_1.set('fieldAliases', {'qc_id': 'qc_id', 'kdppum': 'kdppum', 'namobj': 'namobj', 'remark': 'remark', 'kdpbps': 'kdpbps', 'fcode': 'fcode', 'luaswh': 'luaswh', 'uupp': 'uupp', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdbbps': 'kdbbps', 'kdbpum': 'kdbpum', 'wadmkd': 'wadmkd', 'wiadkd': 'wiadkd', 'wadmkc': 'wadmkc', 'wiadkc': 'wiadkc', 'wadmkk': 'wadmkk', 'wiadkk': 'wiadkk', 'wadmpr': 'wadmpr', 'wiadpr': 'wiadpr', 'tipadm': 'tipadm', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Sungai_2.set('fieldAliases', {'qc_id': 'qc_id', 'namobj': 'namobj', 'tipsng': 'tipsng', 'klssng': 'klssng', 'fcode': 'fcode', 'remark': 'remark', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'namws': 'namws', 'namdas': 'namdas', 'status': 'status', 'wmax': 'wmax', 'dbtmax': 'dbtmax', 'slprt': 'slprt', 'shape_leng': 'shape_leng', });
lyr_KantorPos_3.set('fieldAliases', {'qc_id': 'qc_id', 'namobj': 'namobj', 'fcode': 'fcode', 'jnkpos': 'jnkpos', 'remark': 'remark', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', });
lyr_BatasAdministrasiKecamatan_1.set('fieldImages', {'qc_id': 'TextEdit', 'kdppum': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'kdpbps': 'TextEdit', 'fcode': 'TextEdit', 'luaswh': 'TextEdit', 'uupp': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'kdebps': 'TextEdit', 'kdepum': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdbbps': 'TextEdit', 'kdbpum': 'TextEdit', 'wadmkd': 'TextEdit', 'wiadkd': 'TextEdit', 'wadmkc': 'TextEdit', 'wiadkc': 'TextEdit', 'wadmkk': 'TextEdit', 'wiadkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadpr': 'TextEdit', 'tipadm': 'Range', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Sungai_2.set('fieldImages', {'qc_id': 'TextEdit', 'namobj': 'TextEdit', 'tipsng': 'Range', 'klssng': 'Range', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'namws': 'TextEdit', 'namdas': 'TextEdit', 'status': 'TextEdit', 'wmax': 'TextEdit', 'dbtmax': 'TextEdit', 'slprt': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_KantorPos_3.set('fieldImages', {'qc_id': 'TextEdit', 'namobj': 'TextEdit', 'fcode': 'TextEdit', 'jnkpos': 'Range', 'remark': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', });
lyr_BatasAdministrasiKecamatan_1.set('fieldLabels', {'qc_id': 'no label', 'kdppum': 'no label', 'namobj': 'no label', 'remark': 'no label', 'kdpbps': 'no label', 'fcode': 'no label', 'luaswh': 'no label', 'uupp': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'kdebps': 'no label', 'kdepum': 'no label', 'kdcbps': 'no label', 'kdcpum': 'no label', 'kdbbps': 'no label', 'kdbpum': 'no label', 'wadmkd': 'no label', 'wiadkd': 'no label', 'wadmkc': 'no label', 'wiadkc': 'no label', 'wadmkk': 'no label', 'wiadkk': 'no label', 'wadmpr': 'no label', 'wiadpr': 'no label', 'tipadm': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_Sungai_2.set('fieldLabels', {'qc_id': 'no label', 'namobj': 'no label', 'tipsng': 'no label', 'klssng': 'no label', 'fcode': 'no label', 'remark': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'namws': 'no label', 'namdas': 'no label', 'status': 'no label', 'wmax': 'no label', 'dbtmax': 'no label', 'slprt': 'no label', 'shape_leng': 'no label', });
lyr_KantorPos_3.set('fieldLabels', {'qc_id': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'jnkpos': 'no label', 'remark': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', });
lyr_KantorPos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});