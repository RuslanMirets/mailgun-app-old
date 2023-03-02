import Layout from "@/components/layout/Layout";
import Welcome from "@/components/ui/welcome/Welcome";
import { FC } from "react";

const Home: FC = () => {
	return (
		<Layout title="Главная">
			<Welcome />
		</Layout>
	);
};

export default Home;
