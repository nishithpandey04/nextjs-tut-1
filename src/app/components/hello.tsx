'use client';

import { Paper } from '@mui/material';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Hello() {
  const [data, setData] = useState<TodoResponse[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((res: Response) => res.json())
      .then((todos: TodoResponse[]) => setData(todos));
  }, []);

  const paginationModel = { page: 0, pageSize: 5 };
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', flex: 1 },
    {
      field: 'completed',
      headerName: 'Completed',
      flex: 1,
      valueGetter: (value) => (value ? 'DONE' : 'PENDING'),
    },
  ];

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );

  // return (
  //   <TableContainer component={Paper}>
  //     <Table aria-label='simple table'>
  //       <TableHead>
  //         <TableRow>
  //           <TableCell>ID</TableCell>
  //           <TableCell>Title</TableCell>
  //           <TableCell>Completed</TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {data.map(
  //           (row: { id: number; title: string; completed: boolean }) => (
  //             <TableRow key={row.id}>
  //               <TableCell>{row.id}</TableCell>
  //               <TableCell>{row.title}</TableCell>
  //               <TableCell>{row.completed ? 'DONE' : 'PENDING'}</TableCell>
  //             </TableRow>
  //           )
  //         )}
  //       </TableBody>
  //     </Table>
  //   </TableContainer>
  // );

  // return (
  //   <div className='flex flex-wrap'>
  //     {data.map((val: { id: number; title: string; completed: boolean }) => (
  //       <Card key={val.id} sx={{ minWidth: 275, margin: 2 }} className='grow'>
  //         <CardContent>
  //           <Typography variant='h5' component='div'>
  //             {val.title}
  //           </Typography>
  //           <Typography variant='body2'>
  //             {val.completed ? 'DONE' : 'PENDING'}
  //           </Typography>
  //         </CardContent>
  //       </Card>
  //     ))}
  //   </div>
  // );
}
