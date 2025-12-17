import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  MutableDataFrame,
  FieldType,
} from '@grafana/data';
import { MyQuery, MyDataSourceOptions } from './types';

export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  constructor(instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>) {
    super(instanceSettings);
  }

  async query(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {
  const data = options.targets.map((target) => {
    const frame = new MutableDataFrame({
      refId: target.refId,
      fields: [
        { name: 'Geliştirici', type: FieldType.string },
        { name: 'Öğrenci No', type: FieldType.string },
        { name: 'Parametre 1', type: FieldType.string },
        { name: 'Parametre 2', type: FieldType.string }, 
      ],
    });

    frame.add({
      'Geliştirici': 'Yunus Gürbüz',
      'Öğrenci No': '2023502045',
      'Parametre 1': target.queryText || 'Filtre 1 Boş',
      'Parametre 2': target.ikinciParametre || 'Filtre 2 Boş',
    });

    return frame;
  });

  return { data };
}


  async testDatasource() {
    return {
      status: 'success',
      message: 'Bonus Özellikler Hazır: Başarıyla bağlandı!',
    };
  }
}