import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';

export default function BreadCrumbs() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" sx={{ background: "none" }}
        separator={<NavigateNextIcon fontSize="small" />}>
        <Link underline="hover" color="inherit" href="/">
          Arent
        </Link>
        <Link
          underline="hover" color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Аренда легковых автомобилей
        </Link>
        <Typography color="text.primary">Москва</Typography>
      </Breadcrumbs>
    </div>
  );
}
