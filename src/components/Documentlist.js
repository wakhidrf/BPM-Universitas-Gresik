import React, { useState, useEffect, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Theme
import './DocumentList.css'; // Pastikan ada file CSS ini

function DocumentList() {
  const [rowData, setRowData] = useState([]);

  // Definisi Kolom untuk AG Grid
  const [columnDefs] = useState([
    { field: 'nama_dokumen', headerName: 'Nama Dokumen', flex: 1, minWidth: 150 },
    { field: 'deskripsi', headerName: 'Deskripsi', flex: 2, minWidth: 250 },
    {
      field: 'link',
      headerName: 'Link',
      cellRenderer: (params) => {
        if (params.value) {
          // Asumsi 'link' adalah URL yang valid
          return (
            <a href={params.value} target="_blank" rel="noopener noreferrer" className="document-link">
              Lihat Dokumen
            </a>
          );
        }
        return ''; // Mengembalikan string kosong jika tidak ada link
      },
      width: 120, // Lebar kolom tetap
      maxWidth: 150,
      filter: false, // Nonaktifkan filter pada kolom link
      sortable: false, // Nonaktifkan sorting pada kolom link
    },
  ]);

  // Default ColDef untuk properti umum di semua kolom
  const defaultColDef = useMemo(() => ({
    resizable: true, // Memungkinkan perubahan ukuran kolom
    sortable: true,  // Memungkinkan sorting kolom
    filter: true,    // Memungkinkan filter kolom
    floatingFilter: true, // Filter di bawah header kolom (opsional, bisa dihapus jika tidak diperlukan)
  }), []);

  useEffect(() => {
    // Fungsi untuk memuat data dari file CSV
    const loadCsvData = async () => {
      try {
        const response = await fetch('/assets/data/your-data.csv');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();

        // Pisahkan baris dan filter baris kosong
        const rows = csvText.split('\n').map(row => row.trim()).filter(row => row.length > 0);

        if (rows.length === 0) {
          console.warn('CSV file is empty or contains no valid data.');
          setRowData([]);
          return;
        }

        // Asumsi baris pertama adalah header dan dipisahkan koma
        const headers = rows[0].split(',').map(header => header.trim());
        const data = rows.slice(1).map(row => {
          const values = row.split(',').map(value => value.trim());
          let rowObject = {};
          headers.forEach((header, index) => {
            // Pastikan tidak ada undefined di values
            rowObject[header] = values[index] !== undefined ? values[index] : '';
          });
          return rowObject;
        });
        setRowData(data);
      } catch (error) {
        console.error('Error loading CSV data:', error);
        // Mungkin tampilkan pesan error kepada pengguna atau set state error
      }
    };

    loadCsvData();
  }, []); // Array dependensi kosong berarti efek ini hanya berjalan sekali setelah render pertama

  return (
    <div className="document-list-section">
      <h3>List Dokumen BPM</h3>
      <p>Tabel menggunakan AG Grid</p>
      <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
        {/*
          Properti AG Grid:
          - rowData: Data yang akan ditampilkan di tabel
          - columnDefs: Definisi kolom (nama, header, dll.)
          - defaultColDef: Properti default untuk semua kolom
          - animateRows: Animasi saat baris berubah (misal: sorting)
          - pagination: Aktifkan pagination
          - paginationPageSize: Jumlah baris per halaman
          - domLayout: 'autoHeight' dapat digunakan jika Anda ingin tinggi grid menyesuaikan dengan konten
            namun untuk fixed height seperti 400px, 'normal' atau default lebih baik.
        */}
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
}

export default DocumentList;