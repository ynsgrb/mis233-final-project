import React, { ChangeEvent } from 'react';
import { InlineField, Input } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';
import { MyQuery, MyDataSourceOptions } from '../types';

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export function QueryEditor({ query, onChange, onRunQuery }: Props) {
  // BİRİNCİ FİLTRE FONKSİYONU
  const onQueryTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...query, queryText: event.target.value });
    onRunQuery();
  };

  // İKİNCİ FİLTRE FONKSİYONU
  const onIkinciParametreChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...query, ikinciParametre: event.target.value });
    onRunQuery();
  };

  return (
    <div>
      <div className="gf-form">
        <InlineField label="Filtre 1" labelWidth={16} tooltip="Birinci filtre">
          <Input
            onChange={onQueryTextChange}
            value={query.queryText || ''}
            placeholder="Filtre 1"
            width={40}
          />
        </InlineField>
      </div>

      <div className="gf-form">
        <InlineField label="Filtre 2" labelWidth={16} tooltip="İkinci filtre">
          <Input
            onChange={onIkinciParametreChange}
            value={query.ikinciParametre || ''}
            placeholder="Filtre 2"
            width={40}
          />
        </InlineField>
      </div>
    </div>
  );
}