#  itdelta-web-site-3.0

Studio is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## Working with backups
1) - Install Firebase CLI: `npm install -g firebase-tools`  
2) Log in to your Firebase account: `firebase login`
3) Select a project:
- List projects: -`firebase projects:list`
- Choose a project: `firebase use itdelta-web-site-3`

Create a scheduled backup `firebase firestore:backups:schedules:create --database '(default)' --recurrence 'DAILY' --retention 14w`

1) To get a list of all backup schedules, use the following command: `firebase firestore:backups:schedules:list --database '(default)'`
2) Deleting a backup schedule can be achieved with this command: `firebase firestore:backups:schedules:delete BACKUP-SCHEDULE`
3) To list all backups, use this command: `firebase firestore:backups:list`
4) Delete backup use this command: `firebase firestore:backups:delete BACKUP`
5) To begin the restore operation, use one of the following methods: `firebase firestore:databases:restore \
--backup 'BACKUP' \
--database 'DATABASE_ID'`

For more details, refer to the [Firebase documentation](https://firebase.google.com/docs/firestore/backups?hl=ru)
## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Framer Motion](https://www.framer.com/docs/) - the official Framer Motion documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation
