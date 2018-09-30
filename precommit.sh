#!/bin/bash
# run chmod +x .git/hooks/pre-commit
TAGS=()

for f in $(find . -name '*.md' -mindepth 1 -maxdepth 10 -type f) ;
do
	# echo "$f"
  while read line
  do
    if [[ $line =~ (tags: )(\[(.*)\]) ]];
      then
        for i in ${BASH_REMATCH[2]//,/ }
        do
          tag=${i//\'};
          tag=${tag/[};
          tag=${tag/]};

          if ! [[ ${TAGS[*]} =~ ${tag} ]]
            then
              # echo "not contains: ${tag}";
              TAGS+=(${tag});
          fi
        done
    fi
  done < "$f"
done

mkdir -p tags

for tag in "${TAGS[@]}"
do
  echo "---\ntitle: ${tag}\nlayout: tag\npermalink: /tags/${tag}/\n---" > tags/${tag}.md;
  echo "created: ${tag}";
done

echo 'done';

# print array
# printf '%s\n' "${TAGS[@]}"
# exit 1;
