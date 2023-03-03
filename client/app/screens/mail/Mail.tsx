import Layout from "@/components/layout/Layout";
import MailForm from "@/components/ui/mail-form/MailForm";
import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import styles from "./Mail.module.scss";

const Mail: FC = () => {
	return (
		<Layout title="Mail">
			<Box className={styles.root}>
				<Container maxWidth="md">
					<Box className={styles.body}>
						<Typography className={styles.title} variant="h2" component="h1">
							Send mail
						</Typography>
						<Paper className={styles.paper}>
							<MailForm />
						</Paper>
					</Box>
				</Container>
			</Box>
		</Layout>
	);
};

export default Mail;
