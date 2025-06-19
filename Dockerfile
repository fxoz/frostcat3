# Use the official Bun image for a Linux environment
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Install dependencies into a temporary directory (development)
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Install production dependencies (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Copy node_modules from the dev stage and then all project files
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Optionally run tests & build (set to production env)
ENV NODE_ENV=production
RUN bun test
RUN bun run build

# Final stage: copy production dependencies and only the essential source
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/package.json .
COPY --from=prerelease /usr/src/app/.next .next
COPY --from=prerelease /usr/src/app/public public
COPY --from=prerelease /usr/src/app/src src

# Run the app
USER bun
EXPOSE 9966/tcp
ENTRYPOINT [ "bun", "run", "start" ]
