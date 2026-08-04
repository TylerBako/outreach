--
-- PostgreSQL database dump
--

\restrict ED63VCEibqPABuztZjoToJFRioRc8EElZ1CCxEYXnH2YzomVk4LLeE3ZqkXxA3y

-- Dumped from database version 18.4 (Ubuntu 18.4-0ubuntu0.26.04.1)
-- Dumped by pg_dump version 18.4 (Ubuntu 18.4-0ubuntu0.26.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Comment; Type: TABLE; Schema: public; Owner: ekko
--

CREATE TABLE public."Comment" (
    id integer NOT NULL,
    content text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "authorId" integer NOT NULL,
    "postId" integer NOT NULL
);


ALTER TABLE public."Comment" OWNER TO ekko;

--
-- Name: Comment_id_seq; Type: SEQUENCE; Schema: public; Owner: ekko
--

CREATE SEQUENCE public."Comment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Comment_id_seq" OWNER TO ekko;

--
-- Name: Comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ekko
--

ALTER SEQUENCE public."Comment_id_seq" OWNED BY public."Comment".id;


--
-- Name: Post; Type: TABLE; Schema: public; Owner: ekko
--

CREATE TABLE public."Post" (
    id integer NOT NULL,
    content text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "authorId" integer NOT NULL
);


ALTER TABLE public."Post" OWNER TO ekko;

--
-- Name: Post_id_seq; Type: SEQUENCE; Schema: public; Owner: ekko
--

CREATE SEQUENCE public."Post_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Post_id_seq" OWNER TO ekko;

--
-- Name: Post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ekko
--

ALTER SEQUENCE public."Post_id_seq" OWNED BY public."Post".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: ekko
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    "dateOfBirth" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."User" OWNER TO ekko;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: ekko
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO ekko;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ekko
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: ekko
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO ekko;

--
-- Name: Comment id; Type: DEFAULT; Schema: public; Owner: ekko
--

ALTER TABLE ONLY public."Comment" ALTER COLUMN id SET DEFAULT nextval('public."Comment_id_seq"'::regclass);


--
-- Name: Post id; Type: DEFAULT; Schema: public; Owner: ekko
--

ALTER TABLE ONLY public."Post" ALTER COLUMN id SET DEFAULT nextval('public."Post_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: ekko
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Comment; Type: TABLE DATA; Schema: public; Owner: ekko
--

COPY public."Comment" (id, content, "createdAt", "authorId", "postId") FROM stdin;
57	My therapist recommended me some really useful breathing techniques that helps reset the nervous system, it's called the 4-7-8 breathing technique. a short breakdown is You inhale through your nose for 4 seconds, hold your breath for 7 and then slowly exhale through your mouth for 8. It's supposed to help lower heart rate hopefully this helps	2026-06-17 14:13:21.15	1	50
58	If you haven't got a lot of time you could try splashing water on your face or hold an ice cube in your hand. It helps snap you out of that anxious state	2026-06-17 14:15:52.101	2	50
59	Hey im around to talk whats got you feeling so down?	2026-06-17 14:23:19.911	2	51
60	Yeah whats going on?	2026-06-17 14:26:24.652	3	51
61	Well I just feel like im spiralling	2026-06-17 14:32:21.269	1	51
62	Honestly I get like that sometimes, have you heard of diaphragmatic breathing? if not search it up its really helped me	2026-06-17 14:34:37.013	3	51
63	Nah i've never heard of it, can you give me a quick rundown?	2026-06-17 14:35:39.582	1	51
64	It's basically breating in deeply into your belly, inhaling for 4 seconds and exhaling for 6. It really helps me with calming my nervous system and spiralling thoughts	2026-06-17 14:36:51.575	3	51
65	honestly ten mins a day with meditate relly helps me not have this issues to begin with	2026-06-17 14:39:04.494	2	51
80	OMG for me it gets bad anytime im in relationship	2026-06-18 11:17:32.249	1	58
81	What kind of things are you experiencing	2026-06-18 11:17:53.846	3	58
82	Just get overly attached but then I feel like a strong fear of abandonment	2026-06-18 11:18:49.923	1	58
83	Just get overly attached but then I feel like a strong fear of abandonment	2026-06-18 11:20:20.19	3	58
84	Well anytime you feel like your symptoms are out of control we are here for you	2026-06-18 11:26:23.547	4	58
85	Oh I totally feel you, I cant never focus on whas at hand when I need to	2026-06-18 11:32:37.816	2	59
86	Have you tried any local groups that can support you?	2026-06-18 11:33:10.643	1	59
105	hi my name is lorenzo	2026-06-18 13:02:27.298	1	58
\.


--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: ekko
--

COPY public."Post" (id, content, "createdAt", "authorId") FROM stdin;
50	I've been really struggling with the my anxiety recently, its making getting through the day extremely hard and I was wondering if anyone had any personal techniques that I could use to fall back on when it gets really bad?	2026-06-17 14:10:47.762	2
51	hey, I've just been feeling really lonely rn. Anyone around just to have a chat, my depression is really getting to me is anyone around?	2026-06-17 14:22:23.792	1
58	Is anyone having a tough time handling their bpd symptoms?	2026-06-18 11:17:18.555	3
59	My anxiety is really getting to me right now ts affecting me at work, home life, relationships. I dont feel like I have anyone to talk to	2026-06-18 11:30:09.33	4
67	hello world test post	2026-07-22 13:57:19.3	1
68	Hello my name is Tyler\n	2026-07-22 13:57:40.251	1
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: ekko
--

COPY public."User" (id, "createdAt", username, password, "dateOfBirth") FROM stdin;
3	2026-06-17 16:06:33.252	Pikachu	Test3	1998-02-04 23:00:00
4	2026-06-17 16:27:11.421	GodZilla	test4	2004-12-31 23:00:00
1	2026-06-12 13:51:10.881	Batman	test1234	1998-04-08 00:00:00
2	2026-06-17 16:03:52.201	JavaScriptStuff	user2	2000-09-13 22:00:00
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: ekko
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
cfc67ad0-5348-4d5d-b9b0-cb13fda9f517	ab6353e9c9c2a9bb651ac32d3e6b94a0d6f6c1b9b0e9b51b005787cd36260ad6	2026-06-11 15:44:43.348614+02	20260611134443_adding_data_models	\N	\N	2026-06-11 15:44:43.295773+02	1
37fcd7f6-f1a1-4724-9437-33a51b0727e8	6598a84f36a7bc36a801d1711c81c6ed9b2a1ec9fe1f234c28b073a39ef88b1e	2026-06-13 15:20:44.307958+02	20260613132044_adding_cascading_delete	\N	\N	2026-06-13 15:20:44.281437+02	1
\.


--
-- Name: Comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ekko
--

SELECT pg_catalog.setval('public."Comment_id_seq"', 112, true);


--
-- Name: Post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ekko
--

SELECT pg_catalog.setval('public."Post_id_seq"', 68, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ekko
--

SELECT pg_catalog.setval('public."User_id_seq"', 4, true);


--
-- Name: Comment Comment_pkey; Type: CONSTRAINT; Schema: public; Owner: ekko
--

ALTER TABLE ONLY public."Comment"
    ADD CONSTRAINT "Comment_pkey" PRIMARY KEY (id);


--
-- Name: Post Post_pkey; Type: CONSTRAINT; Schema: public; Owner: ekko
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: ekko
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: ekko
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Comment Comment_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ekko
--

ALTER TABLE ONLY public."Comment"
    ADD CONSTRAINT "Comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Comment Comment_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ekko
--

ALTER TABLE ONLY public."Comment"
    ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES public."Post"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Post Post_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ekko
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

\unrestrict ED63VCEibqPABuztZjoToJFRioRc8EElZ1CCxEYXnH2YzomVk4LLeE3ZqkXxA3y

