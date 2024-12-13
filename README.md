# Finflow - Finance Manager

![Finflow Screenshot 1](https://res.cloudinary.com/dvovo1lfg/image/upload/v1734070262/projects/finflow/s59ssycyj1gs1m131rde.png)
![Finflow Screenshot 2](https://res.cloudinary.com/dvovo1lfg/image/upload/v1734070263/projects/finflow/wgr9n1ixddimlxcaptho.png)
![Finflow Screenshot 3](https://res.cloudinary.com/dvovo1lfg/image/upload/v1734070263/projects/finflow/ri74u8hmoieypep4jfhx.png)
![Finflow Screenshot 4](https://res.cloudinary.com/dvovo1lfg/image/upload/v1734070262/projects/finflow/blqeauo6kkouslm76jfg.png)
![Finflow Screenshot 5](https://res.cloudinary.com/dvovo1lfg/image/upload/v1734070263/projects/finflow/kwzme9labfjd3gwbx7dk.png)
![Finflow Screenshot 6](https://res.cloudinary.com/dvovo1lfg/image/upload/v1734070263/projects/finflow/dnvulertmxqbxsfuidaz.png)

Finflow is a comprehensive finance management application designed to help users track and manage their financial transactions with ease. The application supports multiple account types like cash, bank, and card, allowing users to categorize their transactions and visualize them through various interactive charts. Finflow offers a range of features to enhance user experience, including customizable filters, detailed transaction tables, and multiple chart types. Users can also import transactions via CSV, manage their settings, and authenticate securely.

## Features

- 📊 **Interactive Financial Dashboard:** Visualize your financial data with dynamic charts.
- 🔁 **Changeable Chart Types:** Switch between area, line, bar, pie, radar, and radial charts for better insights.
- 🗓 **Account and Date Filters:** Filter transactions by specific accounts and date ranges.
- 💹 **Detailed Transactions Table:** View all your transactions in a comprehensive table with sorting and filtering options.
- ➕ **Add Transactions Form:** Easily add new transactions using a user-friendly form.
- 🧩 **Customizable Select Components:** Personalize your data selection for a tailored experience.
- 💵 **Income and Expense Toggle:** Quickly switch between viewing income and expenses.
- 🔄 **CSV Transaction Imports:** Import your transactions seamlessly from CSV files.
- ⏳ **Add Skeleton UI for Loading:** Improve user experience with a skeleton screen while data is loading.
- 🔥 **API via Hono.js:** Efficient backend API handling for smooth operations.
- 🪝 **State Management via Tanstack React Query:** Manage your application's state effectively.
- 🔐 **Authentication via Next Auth:** Secure user authentication for server-side rendering.
- 🗑 **Bulk Delete and Search in Transactions:** Efficiently manage your transactions with bulk delete and search functionalities.
- 👤 **User Settings Customization:** Customize your user settings for a personalized experience.
- 🌐 **Built with Next.js 14:** Leveraging the latest features of Next.js for robust performance.
- 🎨 **Styled with TailwindCSS and Shadcn UI:** Modern and responsive design using TailwindCSS and Shadcn UI.
- 💾 **PostgreSQL & Drizzle ORM:** Reliable data storage and management.
- 🚀 **Deployed on Vercel:** Fast and scalable deployment on Vercel.

## Installation

To set up and run Finflow locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/finflow.git
   cd finflow
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Provide your own database connection string and `NEXTAUTH_SECRET` in the `.env` file.

   ```env
   DATABASE_URL=your-database-connection-string
   NEXTAUTH_SECRET=your-nextauth-secret
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- PostgreSQL
- Neon for database
- Drizzle ORM
- Next Auth
- Hono.js for API
- Shadcn UI

## Configuration

Ensure you have the following environment variables set up in your `.env` file:

```env
DATABASE_URL=your-database-connection-string
NEXTAUTH_SECRET=your-nextauth-secret
```

## Usage

You can interact with the application via this link: [Finflow Manager](https://finflow-manager.vercel.app)

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
