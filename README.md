# LPTAS Lab Website

## Overview

The LPTAS lab website is a Next.js application designed to provide comprehensive information about the lab's activities, including contact information, team members, publications, and seminars. This README provides a detailed guide to the structure, setup, and attributions for the project.

### Pages

- _contact_: Contains information on how to contact the lab.
- _equipes_: Lists the team members of the lab.
- _layout.tsx_: Defines the layout component used across the website.
- _page.tsx_: The main page component.
- _providers.tsx_: Configures the providers for the application.
- _publications_: Lists the lab's publications.
- _seminaires_: Provides information on the lab's seminars.

## Setup and Installation

### Prerequisites

- Node.js (version 14.x or later)
- npm or yarn

### Installation Steps

1. _Clone the repository:_

   ```bash
   git clone https://github.com/cargopip/lptas.git
   cd lptas-lab-website
   ```

2. _Install dependencies:_

   ```bash
   Using npm:
   ```

   ```bash
   npm install
   ```

   ```bash
   Or using yarn:
   ```

   ```bash
   yarn install
   ```

3. _Set up environment variables:_

   Create a `.env.local` file in the root directory and add the following variables:

   ```bash
   SANITY_REVALIDATE_SECRET=your_sanity_revalidate_secret
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USERNAME=your_smtp_username
   SMTP_PASSWORD=your_smtp_password
   ```

4. _Run the development server:_

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Backend

The application uses Sanity as its backend for managing content. Ensure you have set up your Sanity project and have the appropriate API keys and project ID. at `sanity.config.ts`

## Attributions

The following images are used in this project with proper attributions:

- Image by [fernando zhiminaicela](https://pixabay.com/users/fernandozhiminaicela-6246704/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3498584) from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3498584)
- Image by [BC Y](https://pixabay.com/users/excellentcc-15820328/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5169689) from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5169689)
- Image by [Tatiana](https://pixabay.com/users/belova59-10750437/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3827740) from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3827740)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project

2. Create your Feature Branch:

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. Commit your Changes:

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. Push to the Branch:

   ```bash
   git push origin feature/AmazingFeature
   ```

5. Open a Pull Request

---

Thank you for using the LPTAS lab website! We hope you find it useful and informative.
