import { z } from 'zod';

export const CastMemberSchema = z.object({
    adult: z.boolean(),
    gender: z.number(),
    id: z.number(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string().nullable(),
    cast_id: z.number(),
    character: z.string(),
    credit_id: z.string(),
    order: z.number(),
});

export const CrewMemberSchema = z.object({
    adult: z.boolean(),
    gender: z.number(),
    id: z.number(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string().nullable(),
    credit_id: z.string(),
    department: z.string(),
    job: z.string(),
});

export const MovieCreditsResponseSchema = z.object({
    id: z.number(),
    cast: z.array(CastMemberSchema),
    crew: z.array(CrewMemberSchema),
});

export type CastMember = z.infer<typeof CastMemberSchema>;
export type CrewMember = z.infer<typeof CrewMemberSchema>;
export type MovieCreditsResponse = z.infer<typeof MovieCreditsResponseSchema>;